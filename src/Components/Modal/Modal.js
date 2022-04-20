import React from 'react'
import './Modal.css'
import '../../App.css'
import {MenuPageData} from '../../Data/MenuPageData'
import { Link } from 'react-router-dom'
function Modal(props) {
  const MenuPageElement = props.setAllMenu(prevMenu =>{
    return prevMenu.map((data)=>{
      return data.on === true ?{...data(<div className='menu-row'>
      <img src={data.url} className='confirmation-image-handler' alt="" />
      <div className="menu-column">
        <h2>{data.name}</h2>
        <h5>{data.total}{data.price}</h5>
        </div>
        </div>)}
    :data})
  })

  console.log(MenuPageElement)

  

  return (
    <div>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h2>Reservation</h2>
            <button className = 'close-modal' onClick ={props.toggle}>Close Modal</button>
            <div className='modal-container'>
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
                {MenuPageElement}
                </div>
              </div>
            </form>
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
        </div>
      </div>
    </div>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Modal