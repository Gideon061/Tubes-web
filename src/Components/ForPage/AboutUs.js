import React from 'react'

function AboutUs() {
  return (
      <section className='primary-background-color' id='aboutUs'>
        <div className="container row-about-us ">
          <div className='about-us'>
        <div className="text-white-color primary-font about-us-col">
          <div className="about-us-font">
          <h2 className='larger-text text-primary-color secondary-font'>About Us</h2>
          <h1 className=''>Lions Steak House</h1>
          <p>Lions Steak House is a steak restaurant located in the city of Bandung. Not only providing steaks, Lions Steak also provides Western food like Spaghetti, Burger, Lasagna whose quality is premium The company was founded by Salsabila and is currently managed by Christian Gideon.Lions Steak House also provides platforms for bookings through online-based websites that can be accessed by consumers.</p>

          <button className='custom-button about-us-btn'><a href='learnMore.com' className='text-white-color'>Learn More</a></button>
          </div>
          </div>
          </div>
        </div>

      </section>
  )
}

export default AboutUs