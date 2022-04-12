import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu/Menu';
import Nav from './Components/ForPage/Nav';
import Homepage from './Page/Homepage';


function App() {

  

  return (
    <BrowserRouter >
    <Nav />
    <Routes>
      <Route path='/' element={<Homepage  />}></Route>
      <Route path='menu' element={<Menu />}></Route>
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
