import React from 'react';
import { AiFillGithub, AiOutlineMedium } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs'

function Header() {

  return (
    <>
      <div className="headerBackgroud">
        <section className="header">
          <header id="noColorHeader">
          <div className="headerLeftStyle">
          <h1>
            <span className="titleFirstName">kristen</span>
            {/* LINK CONTAINERS */}
              <div className="webLinksContainer">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a className="verticalLine" href="#contact">Contact</a>
            </div> 

            <div className="iconContainer">
              <a
                className="headerIcons"
                href="https://github.com/cadakris"
                target='_blank'
                rel="noopener"
                aria-label='Github'
              > <AiFillGithub size={30}/>
            </a>

            <a
                className="headerIcons"
                href="https://www.linkedin.com/in/kristen-cadacio-408b3321/"
                target='_blank'
                rel="noopener"
                aria-label='LinkedIn'
              ><BsLinkedin size={30}/>
            </a>

            <a
                className="headerIcons"
                href="https://medium.com/@kriscadacio"
                target='_blank'
                rel="noopener"
                aria-label='Medium'
              ><AiOutlineMedium size={30} />
            </a>
            </div>
          </h1>
          </div>
          </header>

          <div className="content rightBackground">
            <div className="headerAdjectiveContainer">
              <h1>
                <span className="titleLastName">cadacio</span><br/>
                  <div className="wrapper">
                    <span className="titleJob">software developer and </span>
                      <div className="adjectiveWords">
                        <span className="flipAdjective">plant mom</span>
                        <span className="flipAdjective">avid hiker</span>
                        <span className="flipAdjective">coffee shop addict</span>
                        <span className="flipAdjective">thrifter</span>
                        <span className="flipAdjective">ice cream lover</span>
                      </div>
                  </div>
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header

