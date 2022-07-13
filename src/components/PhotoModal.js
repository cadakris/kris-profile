import React, { useState } from 'react'

function PhotoModal({ projectInfo, setClickedProject, clickedProject, handleClosePhotoModal }) {

  const [current, setCurrent] = useState(0)
  const length = clickedProject.imageSource.length

  // let slideIndex = 1;
  // showSlides(slideIndex);

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slides[slideIndex-1].style.display = "block";
  // }

  const nextSlide = () => {
    console.log((current === length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <>

    <div className="photoModalMask">
        <button onClick={handleClosePhotoModal}><span>  X  </span></button>
      <div className="modal">
        <div className="slideshow-container">
          <div className="mySlides fade"></div>

              {clickedProject.imageSource.map((image, index )=> {
                      return (
                        <div className={index === current ? 'slide active': 'slide'}  key={index}>
                          {index === current && (
                          <img className="modalImage" src={image}></img>
                          )}

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

// onclick="plusSlides(-1)"
// onclick="plusSlides(1)"