import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../Assets/579765.jpg'

function Payment() {
  return (
    <div className='reserve-container'>
      <div className='payment text-white-color primary-font'>
        <div>
      <img src={Images} className='payment-img-handler' alt="QR Code" />
      <form >
        <label>Please enter the amount according to your order</label>
        <br />
        <input type="file" id="myFile" name="filename" required />
        <br />
        <Link to='/'>
        <input onClick={() =>alert(`We're preparing your food, your food will be delivered after the preparation is done and the delivery takes 15-60 minutes depends on the traffic situation. Check your email for detailed transaction`)} className='payment-input-custom custom-button' type="submit"/>
        </Link>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Payment