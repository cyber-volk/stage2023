'use client';

import PDFViewer from '@/components/PDFViewer';

export default function PDFPage() {
  return (
    <div className="min-h-screen p-4">
      <PDFViewer pdfUrl="/rapport.pdf" />
    </div>
  );
}
