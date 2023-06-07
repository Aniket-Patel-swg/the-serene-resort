import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import './font.css'

function App() {
  return (
    <>
    <Navbar about="about" services="services" contact="contact" cta="calltoaction" /> 
     {/* Home page will contain all the components */}
     <HomePage />
    </>
  )
}

export default App
