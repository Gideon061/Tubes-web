import {React} from 'react'
import Carousel from '../Carousel/Carousel'

function Menu() {
  return (
    <section className="menu primary-background-color primary-font">
    <div className="container">
      <div className="">
      <div className="section-margin-center menu">
        <h3 className="text-white-color">Today's Special</h3>
        <h3 className="text-white-color secondary-font larger-text bottom-half-border">Fresh & Delicious</h3>
              <Carousel/>
      </div>
      </div>


      </div>

      
      </section>
  )
}

export default Menu