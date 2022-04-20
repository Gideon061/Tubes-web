import React from 'react'
import {FaPlus } from "react-icons/fa";

function MenuFinder(props) {
  const iconStyle={
    backgroundColor: '#c33939',
    color:'#fff',
    cursor:'pointer'
  }

  
  return (
    <div>
      <div className='menu-column' >
        <div className='menu-row text-white-color menu-main-container primary-font'>
          <img src={props.url} alt="gambar makanan" className='menu-image-handler' />
        <div className='menu-column'>
          <h3>{props.name}</h3>
          <p className='margin-bottom'>{props.body}</p>
          <div className='menu-row add-cart' onClick={() =>props.click(props.id)} >
            <FaPlus onClick={props.toggleAdd} style={iconStyle} />
          <p>{props.price},000</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )

}

export default MenuFinder