
import React, { useState, useEffect } from 'react';
import Footer from '../src/components/Footer'
import Projects from '../src/components/Projects'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import ProjectData from './projectdata.json'

import './styles/app.scss'
import './App.css';

function App() {
  const [showResume, setShowResume] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  // const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(true)
  const [showDemo, setShowDemo] = useState(true)
  const [showPhotos, setShowPhotos] = useState(true)
  const [projectDetails] = useState([...ProjectData])

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
    // body.classList.add("modal-backgroud-mask")
    // body.classList.add("photoModalMask")
  }, [isOpen])

  return (
  <>
    <div className="mainContainer">
        <Header/>
        <About 
          setShowResume={setShowResume}
          showResume={showResume}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          />
        <Projects
          setShowDemo={setShowDemo}
          showDemo={showDemo}
          showPhotos={showPhotos}
          setShowPhotos={setShowPhotos}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          projectDetails={projectDetails}
          // setIsPhotoModalOpen={setIsPhotoModalOpen}
          // isPhotoModalOpen={isPhotoModalOpen}
          />
        <Contact/>
        <Footer/>
    </div>
  </>
  );
}

export default App;
