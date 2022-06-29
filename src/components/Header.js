import React from 'react'

function Header() {
  return (
    <>
      <h1><span className="titleFullName"> Kristen Cadacio</span>
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
      </h1>
    </>
  )
}

export default Header