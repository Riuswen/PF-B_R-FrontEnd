// import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/HomePage/HomePage';
import Detail from './Components/Detail/Detail';
import Login from './Components/LoginForm/LoginForm'
import Registro from './Components/RegisterForm/RegisterForm';
import Reporte from './Components/ReportForm/ReportForm';
import Cards from './Components/Cards/Cards';
import Profile from './Components/Profile/Profile';
import About from "./Components/About/About"
import Donations from './Components/Donations/Donations';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} />
        <Route path="/reporte" element={<Reporte/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path='/profile' element={<Profile />} />       
        <Route path='/ByR' element={<About/>} />       
        <Route path='/donacion' element={<Donations totalValue={"4.99"} invoice={"taza de Cafe"}/>} />       
        
        
      </Routes>
    </div>
  );
}

export default App
