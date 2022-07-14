import { Heart } from 'react-spinners-css';
import React, { useState, useEffect} from 'react'

function DemoModal({ handleCloseModal, projectInfo }) {

  const [loading, setLoading] = useState (true)


  useEffect (() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return (
    <>
    {loading ? 
    <div className="modal-background-mask">
      <div className="modalDemo scroll">
        <div className="loadingContainer">
          <Heart color="#f6e6e0" size={100} />
          <Heart color="#f6e6e0" size={100} />
          <Heart color="#f6e6e0" size={100} /><br/>
          <p> Loading </p>
          </div>
      </div>
    </div>
    
    
    : 
    <div className="modal-background-mask">
      <div className="modalDemo scroll">
        <div className="demoButton"><button onClick={handleCloseModal}><span>x</span></button></div>
        <div className="h_iframe">
            <iframe className="demoVideo"
                src={projectInfo.videoSource}
                frameBorder="0"
                height="400"
                width="2"
                allowFullScreen
            />
        </div>
      </div>
    </div>
} 
    </>
  )
}

export default DemoModal
