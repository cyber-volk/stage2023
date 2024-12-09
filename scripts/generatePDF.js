const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('Starting PDF generation process...');
  
  const browser = await puppeteer.launch({
    headless: true,
    timeout: 120000, // Increased to 2 minutes
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox', 
      '--disable-dev-shm-usage', 
      '--disable-accelerated-2d-canvas', 
      '--no-first-run', 
      '--no-zygote', 
      '--single-process', 
      '--disable-gpu'
    ]
  });

  try {
    const page = await browser.newPage();
    
    // Enhanced error and network logging
    page.on('pageerror', (err) => {
      console.error('Page Error:', err);
    });

    page.on('console', (msg) => {
      const text = msg.text();
      console.log('Page Console:', text);
      
      // Additional filtering for critical errors
      if (text.includes('Error') || text.includes('error')) {
        console.error('Potential Critical Console Error:', text);
      }
    });

    // Intercept and log network requests
    page.on('request', (request) => {
      console.log('Network Request:', request.url());
    });

    page.on('requestfailed', (request) => {
      console.error('Network Request Failed:', request.url(), request.failure().errorText);
    });

    // Configure page for PDF generation
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setDefaultNavigationTimeout(120000);
    await page.setDefaultTimeout(120000);

    console.log('Navigating to PDF page...');
    await page.goto('http://localhost:3000/pdf', {
      waitUntil: 'networkidle0', 
      timeout: 120000
    });

    // Comprehensive page load check
    await page.waitForFunction(() => {
      // Check multiple conditions for page readiness
      return (
        document.readyState === 'complete' && 
        document.querySelector('[data-pdf-viewer="rapport-pdf"]') !== null &&
        // Additional checks to ensure PDF viewer is fully loaded
        document.querySelectorAll('.react-pdf__Document').length > 0
      );
    }, { 
      timeout: 90000,
      polling: 500  // Check every 500ms
    });

    // Ensure complete rendering with a delay
    await page.evaluate(() => {
      return new Promise(resolve => setTimeout(resolve, 5000));
    });

    console.log('Generating PDF...');
    const pdfPath = path.resolve(__dirname, '../public/rapport.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { 
        top: '20mm', 
        right: '20mm', 
        bottom: '20mm', 
        left: '20mm' 
      },
      preferCSSPageSize: true,
      displayHeaderFooter: false
    });

    console.log(`PDF generated successfully at ${pdfPath}`);
    return pdfPath;
  } catch (error) {
    console.error('PDF Generation Error:', error);
    console.error('Error Details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    throw error;
  } finally {
    await browser.close();
  }
}

// Error handling for the entire script
generatePDF().catch(err => {
  console.error('Fatal Error in PDF Generation:', err);
  process.exit(1);
});
