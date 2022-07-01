
import React, { useState } from 'react';
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
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  </>
  );
}

export default App;
