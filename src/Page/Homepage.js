import {React} from 'react'
import {useState} from 'react'
import AboutUs from '../Components/ForPage/AboutUs'
import Bottom from '../Components/ForPage/Bottom'
import ChefChoice from '../Components/ForPage/ChefChoice'
import Footer from '../Components/ForPage/Footer'
import Menu from '../Components/Menu/Menu'
import Reservation from '../Components/ForPage/Reservation'
import Hero from '../Components/ForPage/Hero'
import '../App.css'



function Homepage() {

  const [Modal, setModal] = useState(false);
  function toggleModal (){
    setModal(prevModal => !prevModal)
  }
  return (
    <div>
      <Hero />
      <Reservation toggleModal = {toggleModal} Modal = {Modal} />
      <Menu />
      <AboutUs />
      <ChefChoice />
      <Bottom />
      <Footer />
    </div>
  )
}

export default Homepage