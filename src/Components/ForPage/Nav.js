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
              <a href='/#aboutUs' className="text-primary-color">About</a></li>
            <li>
              <Link to="/restaurant-menu" className="text-primary-color">Menu</Link></li>
            <li>
              <a href="/#contact" className="text-primary-color">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav