import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsMedium, BsLinkedin } from 'react-icons/bs'

function Header() {

  return (
    <>
      <div className="headerBackgroud">
        <section className="header">

          <div className="headerLeftStyle">
          <h1>
            <span className="titleFullName">kristen cadacio</span><br/>
            <div className="iconContainer">
              <a
                className="headerIcons"
                href="https://github.com/cadakris"
                target='_blank'
                rel="noopener"
                aria-label='Github'
              >
            <AiFillGithub size={30}/>
            </a>

            <a
                className="headerIcons"
                href="https://www.linkedin.com/in/kristen-cadacio-408b3321/"
                target='_blank'
                rel="noopener"
                aria-label='LinkedIn'
              >
            <BsLinkedin size={30}/>
            </a>

            <a
                className="headerIcons"
                href="https://medium.com/@kriscadacio"
                target='_blank'
                rel="noopener"
                aria-label='Medium'
              >
            <BsMedium size={30} />
            </a>
            </div>



          </h1>

          </div>

        
        <div className="content">
          <div className="headerAdjectiveContainer">
          <h1>
            <span className="titleJob">software developer</span><br/>
            <div className="wrapper">
            and 
              <div className="adjectiveWords">
                <span className="flipAdjective">a plant mom</span>
                <span className="flipAdjective">hiker</span>
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

