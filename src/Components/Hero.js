import React from 'react'
import Image from '../Assets/images1.png'

function Hero() {
  return (
      <section className="hero hero-images" id='home'>
      <div className="container text-primary-color row first-section">
        <div className="hero-title">
          <h1 className="hero-title-h1 secondary-font larger-text">Art of Gods</h1>
          <p className="hero-title-p primary-font">THE BEST RESTAURANT IN TOWN</p>
          <button className="custom-button primary-font section-margin-right">View Menu</button>
          <button className="custom-button-1 primary-font">Book Now</button>
        </div>
        <div className="hero-img">
        </div>
      </div>
    </section>
  )
}

export default Hero