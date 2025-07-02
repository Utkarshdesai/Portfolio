import React from 'react'
import { navLinks } from "../constants/index"

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <div className="inner max-w-6xl w-full mx-auto">
          <a href="#hero" className="logo">
            Adrian JSM
          </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar