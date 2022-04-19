import React from 'react'
import {MenuPageData} from '../../Data/MenuPageData'
import { Link } from 'react-router-dom'

function ConfirmationOrder() {
  return (
    <div className='container primary-font text-white-color confirmation-order'>
      <div className='confirmation-border'>
        <div className="confirmation-main">
          <h1>Your Order</h1>
          <form>
            <div className='confirmation-header menu-column'>
              <div>
                <label>Name</label>
                <input type='name' className='reservation-input-handler' />
              </div>
              <div>
                <label>Phone Number</label>
                <input type='number' className='reservation-input-handler' />
              </div>
            <div>
              <label>Street Address</label>
              <input type='address' className='reservation-input-handler' />
            </div>
            </div>
            <div className='order-content'>
              <p>Your Order</p>
              <div className="menu-column">
                <div className='menu-row'>
                  <img src={MenuPageData[0].url} className='confirmation-image-handler' alt="" />
                  <div className="menu-column">
                    <h2>1x {MenuPageData[0].body}</h2>
                    <h5>1x {MenuPageData[0].price}k</h5>
                  </div>
                </div>
                <div className='menu-row'>
                  <img src={MenuPageData[1].url} className='confirmation-image-handler' alt="" />
                  <div className="menu-column">
                    <h2>1x {MenuPageData[1].body}</h2>
                    <h5>1x {MenuPageData[1].price}k</h5>
                  </div>
                </div>
                <div className='menu-row'>
                  <img src={MenuPageData[2].url} className='confirmation-image-handler' alt="" />
                  <div className="menu-column">
                    <h2>1x {MenuPageData[2].body}</h2>
                    <h5>1x {MenuPageData[2].price}k</h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='order-row'>
              <h3>Subtotal</h3>
              <h3>123k</h3>
              </div>
              <div className='order-row'>
              <h3>Delivery fee</h3>
              <h3>15k</h3>
              </div>
            </div>
            <div className='menu-column'>
              <h2 className='order-row'>Total in Cart (IDR) = {MenuPageData[0].price}k</h2>
              <Link to='/confirmation/order/payment'>
              <button className='custom-button-order order-button'>Checkout</button>
              </Link>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationOrder