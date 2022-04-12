import React from 'react'
import images from '../../Assets/Logos.png'

function Footer() {
  return (
    <div>
      <section>
      <footer className="footer">
        <div className="container primary-font row text-white-color footer-flex">
          <h4>Copyright 2021 - Lions Steak House</h4>
          <img src={images} className="logo-handler" alt="logo" />
          <div className="row-icon">
          <a href="facebook.com" className="fa fa-facebook text-primary-color icons-sizing">.</a>
          <a href="instagram.com" className="fa fa-instagram text-primary-color icons-sizing">.</a>
          <a href="twitter.com" className="fa fa-twitter text-primary-color icons-sizing">.</a>
          <a href="google.com" className="fa fa-google text-primary-color icons-sizing">.</a>
        </div>
        </div>
      </footer>
    </section>
    </div>
  )
}

export default Footer