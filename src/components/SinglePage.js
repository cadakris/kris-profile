import React, { useState }  from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function SinglePage({setShowResume, handleCloseModal}) {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <>
    <div className="">
      <div className="modal scroll">
        <button onClick={handleCloseModal}><span>x</span></button> <button> <a href='/KristenResume070822.pdf' download><span>Click to download</span></a></button>
        <Document file = "KristenResume070822.pdf" onLoadSuccess = {onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber}/>
        </Document>
      </div>
    </div>
    </>
  )
}

export default SinglePage