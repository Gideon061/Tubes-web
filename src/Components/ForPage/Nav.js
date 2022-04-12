import React from 'react'
import Image from '../../Assets/Logos.png'
import {Link} from 'react-router-dom'

function Nav() {

  return (
    <header>
      <nav className="navigation text-primary-color primary-font">
        <div className="container row">
          <img src={Image} className ='logo-handler'alt="gambar" />
          <ul className="nav-row">
            <li>
              <Link to="/" className="text-primary-color">Home</Link></li>
            <li>
              <Link to='/aboutUs' className="text-primary-color">About</Link></li>
            <li>
              <Link to="menu" className="text-primary-color">Menu</Link></li>
            <li>
              <Link to="contact" className="text-primary-color">Contact</Link></li>
            <li>
              <Link to="contact" className="text-primary-color">Login</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav