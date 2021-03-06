import React from 'react'

function Bottom() {

  const myStyle = {
    fontSize:'1em',
    width:'100%',
    minHeight:'20px',
    color:'#c33939'
  }
  return (
    <div>
          <section id='contact'>
      <div className="bottom-container row primary-background-color primary-font">
        <div className="row container information">
        <div className="column container text-white-color bottom-handler">
        <h2>Contact Us</h2>
        <p className="bottom-text">We are serving the best quality of food in Indonesia, if you want dont find what you need,please fill our contact form</p>
        
        <i className="fa fa-phone" style={myStyle}><a href="web.whatsapp.com" className="primary-font bottom-section-left text-white-color">+6285314985945</a></i>
        <i className="fa fa-map-marker" style={myStyle}><a href="map.google.com" className="primary-font bottom-section-left text-white-color">Jl.Dago No.51, Bandung, Indonesia</a></i>
        <i className="fa fa-envelope-o" style={myStyle}><a href="facebook.com" className="primary-font bottom-section-left text-white-color">info@lionssteakhouse.com</a></i>
        </div>
          <form className="column form-handler container small-screen-form">
            <input type="text" placeholder="Enter Name" required className="form-container text-white-color" />
            <input type="email" placeholder="Enter Email" required className="form-container text-white-color" />
            <textarea placeholder="Type your message" className="form-container text-white-color"></textarea>
            <button className="custom-button-3 form-button">SEND MESSAGE</button>
            </form>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Bottom