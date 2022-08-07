import { Heart } from 'react-spinners-css';
import React, { useState }  from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function SinglePage({setShowResume, handleCloseModal}) {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //THIS IS FOR PDF

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <>
      <div className="whiteModalMask">
       <div className="modal scroll">
        <div className="resumeButtonContainer">
          <div className="resumeButton"><button> <a href='/KristenResume072122.pdf' download><span>download</span></a></button></div>
          <div className="resumeButton"><button onClick={handleCloseModal}><span>x</span></button></div>
        </div>

          <Document file = "KristenResume072122.pdf" onLoadSuccess = {onDocumentLoadSuccess} 
            loading={<div className="heartsContainer">
              <Heart color="#f6e6e0" size={100} />
              <Heart color="#f6e6e0" size={100} />
              <Heart color="#f6e6e0" size={100} />
              <p> Loading </p>
            </div>}>
            <Page 
              size ="A4" 
              pageNumber={pageNumber}
            />
          </Document>
        </div>
      </div>
    </>
  )
}

export default SinglePage