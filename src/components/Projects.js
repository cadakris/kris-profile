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
                  <div className="projectDescription">
                  <h3>{projectInfo.title}</h3>
                  <p>{projectInfo.description}</p>
                  </div>

                <div>
                <ul>
                  <li>
                    <div className="buttonContainer">
                      <button onClick={handleClick}><span>Demo</span></button>
                      {showDemo ? null : <DemoModal handleCloseModal={handleCloseModal} setShowDemo={setShowDemo} demoSrc={demoSrc} projectInfo={projectInfo} />}
                    </div>
                  </li>
                  <li>
                  <button><a target="_blank" href={projectInfo.githubLink}><span>Github</span></a></button>
                </li>
                </ul>
                </div>
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
          </div>
      </section>


    </>
  )
}

export default Projects