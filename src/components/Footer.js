import React from 'react'
import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <>
    <footer>
    <section className="collapse">
      <header className="headerColor">
      <div className="footerSection">
      <span>
      <p>© Kristen Cadacio 2022.{" "}
        <a
          href="https://github.com/cadakris"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="footerIcon" />
        </a>{" "}
      </p> 
      <p>All rights reserved.</p>

      <p>Art by 
        <a
          href="https://heatherday.com/"
          target="_blank"
          rel="noreferrer"
        >Heather Day</a></p>
    </span>
    </div>
      </header>

      <div className="content">
      </div>
    </section>
    </footer>
    </>
  )
}

export default Footer