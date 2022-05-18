import Image from '../Assets/images1.png'
import { MenuPageData } from '../Data/MenuPageData'
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import MenuFinder from '../Data/MenuFinder';
import { Link } from 'react-router-dom';



function MenuPage(props) {

  const myStyle = {
    fontSize:'1em',
    width:'100%',
    minHeight:'20px',
    color:'#c33939'
  }


  const ongkir = 15

  const [allMenu,setAllMenu] = useState(MenuPageData);


  const click = (clicked)=>{
    setAllMenu((previous)=>{
      return previous.map((data)=>{
        return data.id === (clicked) ?{...data, total: data.total+1,on:true}:data
      })
    })
  }
  

  const ModalPageElement = allMenu.filter(allData=>allData.on === true)
  .map(data=>(<div>
    <img src={data.url} className='confirmation-image-handler' alt="" />
    <div className="menu-column">
      <h2>{data.name}</h2>
      <h5>{data.total} x IDR {data.price},000 = IDR {data.total*data.price},000</h5>
    </div>
  </div>))

  const pricePageElement = allMenu.filter(allData=>allData.on === true)
  .reduce((total,data)=>{
    console.log(total)
    console.log(data)
    return total +(data.price*data.total)
  },0)


  const MenuElements = allMenu.map(data=>[
    <MenuFinder 
    key={data.id}
    id={data.id}
    url ={data.url}
    name={data.name}
    body = {data.body}
    price = {data.price}
    on = {data.on}
    click = {click}
    />
  ])





  // Jadi Begitu dipencet yang terjadi adalah ID diterima sama data, terus data nya dimasukin ke Modal
  // Setelah jumlah pesanan ditambahin, Masuk ke Modal, di modal kita cek, kalau jumlah pesanan lebih dari 1, maka yang terjadi adalah
  // berikan value true kepada data nya kemudian tampilkan ke layar, kemudian setelah tampil ke layar ambil juga harga nya dan masukin ke sub total




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
        <ol>
          <li>1. Delivery fee as follows:</li>
          <p>4-10km Rp 15k</p>
          <p>10-15km Rp 25k</p>
          <p>More than 10km 35k or above</p>
          <li>2. Special Note for delivery fee adjustment due to Public Holiday</li>
          <li>3. Kindly take note that actual delivery timing may vary +/- 30 mins from the stipulated delivery time due to unforeseen circumstance such as weather and traffic condition.</li>
        </ol>
      </div>
      <div className="menu-main">
        {MenuElements}
      </div>
      <div className=''>
        {/* <Link to='/confirmation/order' state={{}}> */}
        <div onClick={props.toggle} className='custom-button menu-row-center text-white-color primary-font bottom-menu-container'>
        <FaShoppingCart className='icon-handler-menu-page' />
        <h2 >Cart</h2>
        </div>
        {props.modal && (
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
                <div className="menu-row">
                  {/* Code Here */}
                  {ModalPageElement}
                  </div>
                </div>
              </form>
              </div>
              <div>
                <div className='order-row'>
                <h3>Subtotal</h3>
                <h3>{pricePageElement},000</h3>
                </div>
                <div className='order-row'>
                <h3>Delivery fee</h3>
                <h3>{ongkir},000</h3>
                </div>
              </div>
              <div className='menu-column'>
                <h2 className='order-row'>Total in Cart (IDR) = {pricePageElement+ongkir},000</h2>
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
        )}
      </div>

    </div>
  )
}

export default MenuPage