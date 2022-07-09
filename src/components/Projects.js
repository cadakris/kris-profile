import React, { useState } from 'react'
import DemoModal from './DemoModal'
import ProjectData from '../projectdata.json'


function Projects({ setShowDemo, showDemo }) {

  const [demoSrc, setDemoSrc] = useState("")

  function handleCloseModal () {
    setShowDemo((showDemo) => !showDemo)
    // setIsOpen(!isOpen)
  }

  // const handleClick = (e) => {
  //   setShowDemo((showDemo) => !showDemo)
  //   console.log("target",e.currentTarget.value)
  //   setDemoSrc(e.target)

  // }

  return (
    <>
      <section className="projects">
        <header>
          <h2>Projects</h2>
        </header>
        <div className="content">
          <h2> Projects I have worked on! </h2>

          {ProjectData.map(projectInfo => {
            // console.log(projectInfo.images)
            return (
              <>
              <section key={projectInfo.id}>
                <header>
                  <h3>{projectInfo.title}</h3>
                <p>{projectInfo.description}</p>
                <ul>
                  <li>
                    <div>
                      <button><span>Demo</span></button>
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

          {/* PROJECT 2 */}
          {/* <section>
            <header>
              <h3>BookBook</h3>
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

          {/* PROJECT 3 */}
          {/* <section>
            <header>
              <h3>Swap't</h3>
              <p className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <ul>
                <li>
                <div>
                    <button onClick={handleClick} value="https://www.youtube.com/embed/wwTBl4AuHDs"><span>Demo</span> </button>
                    {showDemo ? null : <DemoModal handleCloseModal={handleCloseModal} setShowDemo={setShowDemo} demoSrc={demoSrc}/>}
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