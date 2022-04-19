import React, { useState } from 'react'
import Image from '../Assets/images1.png'
import { MenuPageData } from '../Data/MenuPageData'
import { FaShoppingCart, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';



function MenuPage() {
  const myStyle = {
    fontSize:'1em',
    width:'100%',
    minHeight:'20px',
    color:'#c33939'
  }

  const iconStyle={
    backgroundColor: '#c33939',
    color:'#fff'

  }

  const Menu = MenuPageData

  const MenuFinder = Menu.map((data)=>{
    return(
      <div className='menu-column'>
        <div className='menu-row text-white-color menu-main-container primary-font'>
        <img src={data.url} alt="gambar makanan" className='menu-image-handler' />
        <div className='menu-column'>
        <h3>{data.name}</h3>
        <p className='margin-bottom'>{data.body}</p>
        <div className='menu-row add-cart'>
        <FaPlus style={iconStyle} />
        <p>{data.price}</p>
        </div>
        </div>

        </div>

      </div>
    )
  })
  return (
    <div className='container'>
      <div className="menu-header">
        <img src={Image} alt="gambar-makanan" />
        <div className='reserve-header primary-font text-white-color'>
          <h1>Lions Steakhouse</h1>
          <i className="fa fa-phone" style={myStyle}><a href="web.whatsapp.com" className="primary-font bottom-section-left text-white-color">+6285314985945</a></i>
          <i className="fa fa-map-marker" style={myStyle}><a href="map.google.com" className="primary-font bottom-section-left text-white-color">Jl.Dago No.51, Bandung, Indonesia</a></i>
        </div>
      </div>
      <div className='menu-body primary-font text-white-color'>
        <h1>For Delivery Service</h1>
        <h2>Notice</h2>
        <ol type='1'>
          <li>1. Delivery fee as follows:</li>
          <p>4-10km Rp 15k</p>
          <p>10-15km Rp 25k</p>
          <p>More than 10km 35k or above</p>
          <li>2. Special Note for delivery fee adjustment due to Public Holiday</li>
          <li>3. Kindly take note that actual delivery timing may vary +/- 30 mins from the stipulated delivery time due to unforeseen circumstance such as weather and traffic condition.</li>
        </ol>
      </div>
      <div className="menu-main">
        {MenuFinder}
      </div>
      <div className=''>
        <Link to='/confirmation/order'>
        <div className='custom-button menu-row-center text-white-color primary-font bottom-menu-container'>
        <FaShoppingCart className='icon-handler-menu-page' />
        <h2 >Cart</h2>
        </div>
        </Link>
      </div>

    </div>
  )
}

export default MenuPage