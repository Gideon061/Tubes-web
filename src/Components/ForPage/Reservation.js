import React from 'react'
import '../Modal/Modal.css'

function Reservation(props) {
  return (
      <section className="reservation accent-background-color primary-font">
        <div className="container text-white-color row container-row">
          <h3>Delicious start right here. Enjoy the real food</h3>
          <button className="custom-button-1" onClick={props.toggleModal}>Make a reservation</button>
        </div>
        {props.Modal&&(
                  <div className="modal">
                  <div className="overlay">
                    <div className="modal-content">
                      <h2>Hello modal</h2>
                      <div className="content">
                        
                      </div>
                      <button className = 'close-modal' onClick ={props.toggleModal}>Close Modal</button>
                    </div>
                  </div>
                </div>
        )}

    </section>
  )
}

export default Reservation