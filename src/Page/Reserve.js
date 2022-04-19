import {React} from 'react'
import Image from '../Assets/images1.png'
import Form from '../Components/Modal/Form/Form'


function Reserve() {

  const myStyle = {
    fontSize:'1em',
    width:'100%',
    minHeight:'20px',
    color:'#c33939'
  }



  

  return (
    <div className='reserve-container'>
      <img src={Image} alt="gambar-makanan" />
      <div className='reserve-header primary-font text-white-color'>
        <h1>Lions Steakhouse</h1>
        <i className="fa fa-phone" style={myStyle}><a href="web.whatsapp.com" className="primary-font bottom-section-left text-white-color">+6285314985945</a></i>
        <i className="fa fa-map-marker" style={myStyle}><a href="map.google.com" className="primary-font bottom-section-left text-white-color">Jl.Dago No.51, Bandung, Indonesia</a></i>
      </div>
      <div className='primary-font text-white-color'>
        <h1>Opening Hour</h1>
        <h3>Monday to Sunday: 12pm to 2pm</h3>
        <Form />
      </div>
    </div>
  )
}

export default Reserve