import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
    {/* This is just demo texts and styles, purpose is to finalize folder structure and components. */}
     <Navbar />
     {/* Home page will contain all the components */}
     <HomePage />
    </>
  )
}

export default App
