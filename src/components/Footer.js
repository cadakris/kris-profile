import React from 'react'
import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <>
    <footer>
    <section>
      <header className="headerColor">
      <div className="footerSection">
      <span>
      <p>© Kristen Cadacio. All rights reserved.</p>
      <p>Built and Designed by Kristen Cadacio{" "}
      <a
        href="https://github.com/cadakris"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="footerIcon" />
      </a>{" "}</p>
      <p>Art by 
        <a
          href="https://heatherday.com/"
          target="_blank"
          rel="noreferrer"
        >Heather Day</a></p>
    </span>
    </div>
      </header>
    </section>
    </footer>
    </>
  )
}

export default Footer