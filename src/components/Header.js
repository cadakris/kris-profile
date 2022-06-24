import React from 'react'

function Header() {
  return (
    <>
    <div className="headerContainer">
      <h1><span className="titleFullName"> Kristen Cadacio</span>
        <br/>A <span className="titleJob">software developer</span>
        <div className="wrapper">
        <br/>and
        <div className="adjectiveWords">
        <span className="flipContainer">
          <span className="flip flip-plant flipAdjective"> a plant mom</span>
          <span className="flip flip-hiker flipAdjective"> hiker </span>
          <span className="flip flip-superhero flipAdjective"> superhero movie fan</span>
          <span className="flip flip-foodie flipAdjective"> foodie </span>
          <span className="flip flip-stationary flipAdjective"> stationary hoarder </span>
        </span>
        </div>
        </div>


      </h1>
    </div>

    </>
  )
}

export default Header