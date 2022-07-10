import React, { useState } from 'react'
import DemoModal from './DemoModal'
import ProjectData from '../projectdata.json'


function Projects({ setShowDemo, showDemo, isOpen, setIsOpen}) {

  const [demoSrc, setDemoSrc] = useState("")
  const [clickedProject, setClickedProject] = useState({})

  function handleCloseModal () {
    setShowDemo((showDemo) => !showDemo)
    setIsOpen(!isOpen)
  }

  const handleClick = (e) => {
    setShowDemo((showDemo) => !showDemo)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <section className="projects">
        <header className="headerColor">
          <h2>Projects</h2>
        </header>
        <div className="content">
          <h2> Projects I have worked on! </h2>

          {ProjectData.map(projectInfo => {
            return (
              <>
              <section key={projectInfo.id}>
                <header className="projectHeader">
                  <h3>{projectInfo.title}</h3>
                <div className="descriptionContainer"><p>{projectInfo.description}</p></div>
                <ul>
                  <li>
                    <div>
                      <button onClick={handleClick}><span>Demo</span></button>
                      {showDemo ? null : <DemoModal handleCloseModal={handleCloseModal} setShowDemo={setShowDemo} demoSrc={demoSrc} projectInfo={projectInfo} />}
                    </div>
                  </li>
                  <li>
                  <button><a target="_blank" href={projectInfo.githubLink}><span>Github</span></a></button>
                </li>
                </ul>
                </header>


              <div className="content">
                <div className="gallery">
                    {projectInfo.imageSource.map(image => {
                      return (
                        <a href="">
                          <img src={image}></img>
                        </a>
                      )
                    })}
                </div>
              </div>
               </section>
              </>
            )
          }
          )}

        
          {/* PROJECT 1 */}
          {/* <section>
            <header>
              <h3>Reci-Prep</h3>
              <p className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <ul>
                <li>
                <div>
                    <button onClick={handleClick} value="https://www.youtube.com/embed/wwTBl4AuHDs"><span>Demo</span> </button>
                    {showDemo ? null : <DemoModal handleCloseModal={handleCloseModal} setShowDemo={setShowDemo} demoSrc={demoSrc} />}
                  </div>
                </li>
                <li>
                  <a target="_blank" href="">Github</a>
                </li>
              </ul>  
            </header>

            <div className="content">
              <div className="gallery">
                <a href="">
                  <img src="https://res.cloudinary.com/dnr8dgxt2/image/upload/v1656101959/heather-day-art-11_svbe56.jpg"></img>
                </a>

                <a href="">
                  <img src="https://res.cloudinary.com/dnr8dgxt2/image/upload/v1656101959/heather-day-art-11_svbe56.jpg"></img>
                </a>

                <a href="">
                  <img src="https://res.cloudinary.com/dnr8dgxt2/image/upload/v1656101959/heather-day-art-11_svbe56.jpg"></img>
                </a>
              </div>
            </div>
          </section> */}
          </div>
      </section>


    </>
  )
}

export default Projects