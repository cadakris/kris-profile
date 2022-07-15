import React, { useState } from 'react'

function PhotoModal({ clickedProject, handleClosePhotoModal }) {

  const [current, setCurrent] = useState(0)
  const length = clickedProject.imageSource.length

  //THIS CREATES IMAGE CAROUSEL

  const nextSlide = () => {
    setCurrent((current === length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <>
    <div className="whiteModalMask">
      <div className="photoModalButton"><button onClick={handleClosePhotoModal}><span>  X  </span></button></div>
        <div className="modal noscroll">
          <div className="slideshow-container">
            <div className="mySlides fade"></div>

                {clickedProject.imageSource.map((image, index )=> {
                        return (
                          <div className={index === current ? 'slide active': 'slide'}  key={index}>
                            {index === current && (<img className="modalImage" src={image}></img>)}
                          </div>
                          )
                      })}
              <a className="prev" onClick={prevSlide}>&#10094;</a>
              <a className="next" onClick={nextSlide}>&#10095;</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhotoModal  
