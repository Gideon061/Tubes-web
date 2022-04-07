import React from 'react'
import Image from '../Assets/Logos.png'

function Nav() {
  return (
    <header>
      <nav className="navigation text-primary-color primary-font">
        <div className="container row">
          <img src={Image} className ='logo-handler'alt="gambar" />
          <ul className="nav-row">
            <li><a href="#home" className="text-primary-color">Home</a></li>
            <li><a href="#aboutUs" className="text-primary-color">About</a></li>
            <li><a href="#menu" className="text-primary-color">Menu</a></li>
            <li><a href="#contact" className="text-primary-color">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav