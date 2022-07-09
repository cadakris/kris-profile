import React from 'react'

function DemoModal({ handleCloseModal, demoSrc }) {
  return (
    <>
    <div className="">
      <div className="modalDemo scroll">
        <button onClick={handleCloseModal}><span>x</span></button>
        <div className="h_iframe">
            <iframe className="demoVideo"
                src="{demoSrc}"
                frameBorder="0"
                height="400"
                width="2"
                allowFullScreen
            />
        </div>
      </div>
    </div>
    </>
  )
}

export default DemoModal
