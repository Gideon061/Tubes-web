import React from 'react'
import './Modal.css'
import '../../App.css'

import  {MenuData}  from '../Menu/MenuData'
function Modal(props) {
  const DataMapping = MenuData.map(data =>{
    return (
      <div className='modal-main-container modal-row'>
        <input type='checkbox' className='modal-checkbox' />
        <img src={data.url} className='img-handler' alt='gambar makanan' />
        <div className="modal-col">
        <h3 >{data.name}</h3>
        <p className='text-handler'>{data.body}</p>
        </div>
        <h5>{data.price}</h5>
      </div>
    )
  })

  return (
    <div>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h2>Reservation</h2>
            <button className = 'close-modal' onClick ={props.toggleModal}>Close Modal</button>
            <div className='modal-container'>
              <form>
                <label>Party Size</label>
                <select>
                  <option value='1 Person'>1 Person</option>
                  <option value='2 Person'>2 Person</option>
                  <option value='3 Person'>3 Person</option>
                  <option value='4 Person'>4 Person</option>
                  <option value='5 Person'>5 Person</option>
                </select>
                <label>Dining Date:</label>
                <input type='date' name='date' />
              </form>
            {DataMapping}
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal