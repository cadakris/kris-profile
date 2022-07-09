import React, { useEffect } from 'react'
// import ResumeModal from './ResumeModal'
import SinglePage from './SinglePage'


function About({showResume, setShowResume, isOpen, setIsOpen}) {

  function handleCloseModal () {
    setShowResume((showResume) => !showResume)
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    setShowResume(!showResume)
    setIsOpen(!isOpen)
  }

  //TARGETING THE BODY TO HIDE SCROLLBAR AND ADD MODAL CLASSNAME 
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
    body.classList.add("modal-backgroud-mask")
  }, [isOpen])

  return (
    <>
    <section className="about">
      <header>
        <h2>About</h2>
      </header>

      <div className="content">
        <div className="aboutContentText">
        <p>Hi! I'm a software developer with experience utilizing frontend and backend technologies. With ten years of professional experience in the television industry, I successfully managed teams, created hours of content, and managed projects life cycles from acquisition to customer delivery for various television production companies. I’m a voracious learner who is excited to utilize my newfound passion and skills to develop and create exciting products!</p><br/>

        <p>When I'm not coding, you can find me exploring exploring my city, reading, riding my bike, or hiking!</p><br/>

        <p>To learn more about my professional and technical experience, please check out my resume</p><br/>
        
        </div>
        <div className="center">
        <button onClick={handleClick}><span>Resume</span></button>
        {showResume ? null : <SinglePage handleCloseModal={handleCloseModal} setShowResume={setShowResume}/>}
        </div>

      </div>
    </section>
    </>
  )
}

export default About