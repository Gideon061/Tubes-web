import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {


  const buttonStyle = {
    border:'none',
    marginTop:'1em'
  }
  return (
    <div className='hero-images'>
      <section className={"hero"} id='home'>
      <div className="container text-primary-color row first-section">
        <div className="hero-title">
          <h1 className="hero-title-h1 secondary-font larger-text">Art of Gods</h1>
          <p className="hero-title-p primary-font text-white-color">THE BEST RESTAURANT IN TOWN</p>
          <Link to='/reservation'>
          <button className="custom-button-1 primary-font" style={buttonStyle}>make Reservation</button>
            </Link>

          {/* <button className="custom-button-1 primary-font" style={buttonStyle}>Book Now</button> */}
        </div>

      </div>

    </section>
    </div>
  )
}

export default Hero