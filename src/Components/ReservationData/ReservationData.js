import React from 'react'
import PhoneInput from 'react-phone-number-input/input'
import { useState } from 'react'
import Image from '../../Assets/images1.png'
import {FaCalendarCheck ,FaUser,FaClock} from 'react-icons/fa'

function ReservationData() {

  const inlineDisplay={
    display:'inline',
    marginTop:'1em'
  }
  const buttonStyle = {
    border:'none',
    marginTop:'1em'
  }

  const [value,setValue] = useState()
  return (
    <div className='reserve-container text-white-color primary-font '>
      <h1>Enter contact info and confirm booking</h1>
      <div className='row reservation-data-header'>
        <div >
          <img src={Image} alt="gambar Makanan" className='reservation-data-image-handler' />
          <h2>Lions Steak House</h2>
          <FaUser /><p style={inlineDisplay}>2 Adults</p><br/>
          <FaCalendarCheck /><p style={inlineDisplay}>Tue,Apr 19,2022</p><br/>
          <FaClock /><p style={inlineDisplay}>12:00</p>
        </div>
        <div>
          <form className='reservation-data-form text-white-color primary-font reservation-data-column reservation-data-color'>
            <div className='name'>
              <label>Name</label>
              <input required type='name' className='reservation-input-handler' ></input>
            </div>
            <div className='mobile-number'>
              <label>Mobile Phone Number</label>
              <PhoneInput 
              value={value} 
              onChange={setValue}
              country='ID'
              className = 'reservation-input-handler'
              />
            </div>
            <div className='email'>
              <label>Email</label>
              <input required type='email' className='reservation-input-handler'></input>
              <div>
                <p>You will receive an email to confirm your booking.</p>
              </div>
            </div>
            <div className=''>
              <label>Please specify your preferred seats.</label>
              <div className='area-row'>
                <span className='area-card'>Smoking</span>
                <span className='area-card'>Non-Smoking</span>
            </div>
            </div>
            <div className='column'>
              <label>Note</label>
              <textarea required className ='reservation-textarea' placeholder='Got a special request? Leave it here(e.g allergies,wheelchair,etc.)' ></textarea>
            </div>
            <button className='custom-button-1' style={buttonStyle}>Book Now</button>
            <button className='custom-button'>Back</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReservationData