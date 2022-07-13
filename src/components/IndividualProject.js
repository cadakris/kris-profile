import React from 'react'
import PhotoModal from './PhotoModal'
import DemoModal from './DemoModal'

function IndividualProject({ setShowDemo, showDemo, isOpen, setIsOpen, showPhotos, setShowPhotos, projectInfo, setClickedProject, clickedProject, setIsPhotoModalOpen, isPhotoModalOpen }) {

    function handleCloseModal () {
        setShowDemo((showDemo) => !showDemo)
        setIsOpen(!isOpen)
      }

      const handleClick = () => {
        setShowDemo(!showDemo)
        setIsOpen(!isOpen)
      }

      function handleClosePhotoModal () {
        setShowPhotos((showPhotos) => !showPhotos)
        // setIsPhotoModalOpen(!isPhotoModalOpen)
        setIsOpen(!isOpen)
    }
    
      const handlePhotoClick = () => {
        setShowPhotos(!showPhotos)
        // setIsPhotoModalOpen(!isPhotoModalOpen)
        setClickedProject(projectInfo)
        setIsOpen(!isOpen)
      }

  return (
    <>
        <h2> Projects I have worked on! </h2>
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
                    {showDemo ? null : <DemoModal handleCloseModal={handleCloseModal} projectInfo={projectInfo} />}
                  </li>
                  <li className="projectList">
                    <button><a target="_blank" href={projectInfo.githubLink}><span className="projectSpan">Github</span></a></button>
                  </li>
                </ul>
                </header>

              <div className="content">
                <div className="gallery">
                
                {showPhotos ? null : <PhotoModal handleClosePhotoModal={handleClosePhotoModal} clickedProject={clickedProject}/>}
                    {projectInfo.imageSource.map((image, index) => {
                      if (index === 0) {
                        return (<img className="landscapeImg" src={projectInfo.mainPotoSrc} onClick={handlePhotoClick}></img>)
                      } else {
                        return (
                          <div className="imgContainer" key={image} onClick={handlePhotoClick}>
                            <img src={image}></img>
                          </div>
                        )
                      }
                    })}
                </div>
              </div>
               </section>
    </>
  )
}

export default IndividualProject