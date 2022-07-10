
import React, { useState, useEffect } from 'react';
import Footer from '../src/components/Footer'
import Projects from '../src/components/Projects'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Contact from '../src/components/Contact'

import './styles/app.scss'
import './App.css';

function App() {
  const [showResume, setShowResume] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [showDemo, setShowDemo] = useState(true)

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
    body.classList.add("modal-backgroud-mask")
  }, [isOpen])

  return (
  <>
    <div className="mainContainer modal-open">
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
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          />
        <Contact/>
        <Footer/>
    </div>
  </>
  );
}

export default App;
