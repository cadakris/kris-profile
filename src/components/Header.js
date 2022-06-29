import React from 'react'

function Header() {
  return (
    <>
      <div className="headerBackgroud">
        <section className="header">
          <header>
          <div className="headerLeftStyle">
          <h1>
            <span className="titleFullName">kristen cadacio</span><br/>
          </h1>
          </div>
          </header>
        
        <div className="content">
          <h1>
            <span className="titleJob">software developer</span><br/>
            <div className="wrapper">
            and 
              <div className="adjectiveWords">
                <span className="flipAdjective">a plant mom</span>
                <span className="flipAdjective">hiker</span>
                <span className="flipAdjective">coffee shop enthusiast</span>
                <span className="flipAdjective">thrifter</span>
                <span className="flipAdjective">ice cream lover</span>
              </div>
            </div>
          </h1>
        </div>
        </section>
      </div>

      <div class="angle angle1"></div>

    </>
  )
}

export default Header

{/* <h1><span className="titleFullName"> kristen cadacio</span>
<br/><span className="titleJob">software developer</span>
  <div className="wrapper">
  <br/>and
  <div className="adjectiveWords">
    <span className="flip flip-plant flipAdjective"> a plant mom</span>
    <span className="flip flip-hiker flipAdjective"> hiker </span>
    <span className="flip flip-superhero flipAdjective"> bookworm </span>
    <span className="flip flip-foodie flipAdjective"> something </span>
    <span className="flip flip-stationary flipAdjective"> something </span>
  </div>
  </div>
</h1> */}