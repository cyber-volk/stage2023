import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Set the worker source for react-pdf to use local file
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPreviousPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages || 1));
  };

  return (
    <div 
      data-pdf-viewer="rapport-pdf"
      className="flex flex-col items-center w-full max-w-4xl mx-auto p-4"
    >
      <div className="relative w-full">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={false}
            className="shadow-lg"
          />
        </Document>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          variant="outline"
          size="icon"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <span className="text-sm">
          Page {pageNumber} of {numPages}
        </span>
        
        <Button
          onClick={goToNextPage}
          disabled={pageNumber >= (numPages || 1)}
          variant="outline"
          size="icon"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
