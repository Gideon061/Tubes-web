import {React} from 'react'
import {MenuData} from './MenuData'
import Carousel from '../Carousel/Carousel'

function Menu() {
  return (
    <section class="menu primary-background-color primary-font">
    <div class="container">
      <div class="">
      <div class="section-margin-center menu">
        <h3 class="text-white-color">Today's Special</h3>
        <h3 class="text-white-color secondary-font larger-text bottom-half-border">Fresh & Delicious</h3>
              <Carousel/>
      </div>
      </div>


      </div>

      
      </section>
  )
}

export default Menu