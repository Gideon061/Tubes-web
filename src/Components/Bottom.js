import React from 'react'

function Bottom() {

  const myStyle = {
    fontSize:'1em',
    color:'#c33939'
  }
  return (
    <div>
          <section id='contact'>
      <div className="bottom-container row primary-background-color primary-font">
        <div className="row container information">
        <div className="column container text-white-color bottom-handler">
        <h2>Contact Us</h2>
        <p className="bottom-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto cum aliquam quam repellat rem provident sunt aliquid mollitia. Voluptate cum ea architecto dolorum odio.</p>
        
        <i className="fa fa-phone" style={myStyle}><a href="web.whatsapp.com" className="bottom-section-left text-white-color">+6285314985945</a></i>
        <i className="fa fa-map-marker" style={myStyle}><a href="map.google.com" className="bottom-section-left text-white-color">Jl.Dago No.51, Bandung, Indonesia</a></i>
        <i className="fa fa-envelope-o" style={myStyle}><a href="facebook.com" className="bottom-section-left text-white-color">info@lionssteakhouse.com</a></i>
        </div>
          <form class="column form-handler container small-screen-form">
            <input type="text" placeholder="Enter Name" required className="form-container text-white-color" />
            <input type="email" placeholder="Enter Email" required className="form-container text-white-color" />
            <textarea placeholder="Type your message" className="form-container text-white-color"></textarea>
            <button class="custom-button-3 form-button">SEND MESSAGE</button>
            </form>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Bottom