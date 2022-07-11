import React from 'react'
import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <>
    <footer>
    <section>
      <header className="headerColor">
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
    </span>
      </header>
    </section>
    </footer>
    </>
  )
}

export default Footer