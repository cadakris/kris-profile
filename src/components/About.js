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
  return (
    <>
    <section className="collapse" id="about">
      <header className="headerColor">
        <h2 className="mainSideHeaer">About</h2>
      </header>

      <div className="content">
        <div className="aboutContentText">
        <br/>
        <p>Hi I’m Kristen, an aspiring software developer! </p><br/>

        <p>I’m a driven and hardworking professional with a proven track record of creating and delivering hours of compelling stories, who is looking to take my newfound technical skills and past work experience to create meaningful applications and products that can help inspire, enhance, and bring joy to people’s lives. </p><br/>

        <p>I’m a voracious learner who is eager to expand my technical knowledge and build upon the foundations of frontend and backend technologies that I already have. I’m excited to utilize my newfound passion for development and my technical skills to develop and create exciting products! </p><br/>
        
        <p>When I’m not coding, you can find me exploring my city (which happens to be the best city in the world. No bias here!), checking out coffee shops, riding around town on my bike, binging the latest season of whatever television show is trending, and stuffing my face with delicious food! </p><br/>

        <p>To learn more about my professional and technical experience, please download my resume below, shoot me a message below or just enjoy this portfolio I put together! </p><br/>

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