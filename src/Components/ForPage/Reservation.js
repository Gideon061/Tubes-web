import React from 'react'
import { Link } from 'react-router-dom'
import '../Modal/Modal.css'

function Reservation(props) {
  return (
    <div className='reservation-image'>
      <section className="reservation accent-background-color primary-font">
        <div className="container text-white-color row container-row">
          <h3>Delicious start right here. Enjoy the real food</h3>
          <Link to='menu'>
            <button className="custom-button-1" onClick={props.toggleModal}>Order Online</button>
            </Link>
        </div>
    </section>
    </div>
  )
}

export default Reservation