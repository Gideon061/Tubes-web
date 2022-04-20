import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/ForPage/Nav';
import Homepage from './Page/Homepage';
import Reserve from './Page/Reserve';
import ReservationData from './Components/ReservationData/ReservationData';
import MenuPage from './Page/MenuPage';
import ConfirmationOrder from './Components/ReservationData/ConfirmationOrder';
import Payment from './Components/Payment/Payment';
import RestaurantMenu from './Components/Menu/RestaurantMenu';
import { useState } from 'react';


function App() {

  const[modal,setModal] = useState(false)

  function modalToggle(){
    setModal(prevState => !prevState)
  }

  return (
    <BrowserRouter >
    <Nav />
    <Routes>
      <Route path='/' element={<Homepage  />}></Route>
      <Route path='/menu' element={<MenuPage toggle= {modalToggle} modal = {modal} />}></Route>
      <Route path='/restaurant-menu' element={<RestaurantMenu />}></Route>
      <Route path='/reservation' element ={<Reserve />} ></Route>
      <Route path='/reservation/data' element = {<ReservationData />}></Route>
      <Route path='/confirmation/order' element ={<ConfirmationOrder />}></Route>
      <Route path='/confirmation/order/payment' element ={<Payment />}></Route>
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
