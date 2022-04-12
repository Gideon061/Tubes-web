import React from 'react'
import Images from '../Assets/images1.png'

function Hero() {


  const buttonStyle = {
    border: '0px solid red'
  }
  return (
      <section className={"hero hero-images"} id='home'>
      <div className="container text-primary-color row first-section">
        <div className="hero-title">
          <h1 className="hero-title-h1 secondary-font larger-text">Art of Gods</h1>
          <p className="hero-title-p primary-font">THE BEST RESTAURANT IN TOWN</p>
          <button className="custom-button primary-font section-margin-right">View Menu</button>
          <button className="custom-button-1 primary-font" style={buttonStyle}>Book Now</button>
        </div>
        <div className="hero-img" >
          <img src={Images} alt="title-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero