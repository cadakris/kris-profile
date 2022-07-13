import React, { useState } from 'react'
import IndividualProject from './IndividualProject'




function Projects({ setShowDemo, showDemo, isOpen, setIsOpen, showPhotos, setShowPhotos, projectDetails, isPhotoModalOpen, setIsPhotoModalOpen}) {

  const [clickedProject, setClickedProject] = useState({})

  return (
    <>
      <section className="projects">
        <header className="headerColor">
          <h2>Projects</h2>
        </header>
        <div className="content"> {
          projectDetails.map(projectInfo => {
            return <IndividualProject 
                key={projectInfo.id}
                projectInfo={projectInfo}
                setShowDemo={setShowDemo}
                showDemo={showDemo}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                clickedProject={clickedProject}
                setClickedProject={setClickedProject}
                showPhotos={showPhotos}
                setShowPhotos={setShowPhotos}
                setIsPhotoModalOpen={setIsPhotoModalOpen}
                isPhotoModalOpen={isPhotoModalOpen}
              />
          }) 
        }

          </div>
      </section>
</>

  )
}

export default Projects