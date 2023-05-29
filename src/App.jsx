import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
    <Navbar /> 
     {/* Home page will contain all the components */}
     <HomePage />
    </>
  )
}

export default App
