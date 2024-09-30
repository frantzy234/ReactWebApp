import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/MovieList/Contact';
import Top from './components/MovieList/Top'


function App() {
  const [logo, setLogo] = useState({
    contact: "https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png",
  });

  return (
    <>
      <Navbar />
      
   

      <main className="appMain">
        <Routes>
          <Route path="/contact" element={<Contact logo={logo.contact} />} />
          <Route path="/quoteoftheday" element={<Top />} /> 
          <Route path="/" element={<MovieList />} /> 
        </Routes>
      </main>

      
    </>
  );
}

export default App;
