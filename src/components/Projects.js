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

  const handlePhotoClick = (e) => {
    console.log("I was clicked")
    console.log(e.target)
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
                  <p className="projectParagraph">{projectInfo.technologies}</p>
                  <p z>{projectInfo.description}</p>
                  </div>

                <ul className="buttonContainer">
                  <li className="projectList">
                    <button onClick={handleClick}><span className="projectSpan">Demo</span></button>
                    {showDemo ? null : <DemoModal handleCloseModal={handleCloseModal} setShowDemo={setShowDemo} demoSrc={demoSrc} projectInfo={projectInfo} />}
                  </li>
                  <li className="projectList">
                    <button><a target="_blank" href={projectInfo.githubLink}><span className="projectSpan">Github</span></a></button>
                  </li>
                </ul>
                </header>


              <div className="content">
                <div className="gallery">
                <img onclick={handlePhotoClick} className="landscapeImg" src={projectInfo.mainPotoSrc}></img>
                    {projectInfo.imageSource.map(image => {
                      return (
                        <div className="imgContainer">
                          <img src={image}></img>
                        </div>
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