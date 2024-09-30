import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import trending from '../assets/trending.png';
import rated from '../assets/rated.png';
import phone from '../assets/phone.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>
        123Moviesz
        <div className="logo">
          <img src="https://www.kindpng.com/picc/m/187-1876040_popcorn-and-movie-reel-transparent-background-hd-png.png" alt="" className="movieLogo" />
        </div>
      </h1>
      <div className="navbar_links">
        <Link to='/'>Home</Link> 
        <Link to='/'>Trending<img src={trending} alt='trending emoji' className='emojis' /></Link>
        <Link to='/quoteoftheday'>Quote of the Day
        <img src={rated} alt='rated emoji' className='emojis' /></Link>
        <Link to='/contact'>Contact <img src={phone} alt='rated emoji' className='emojis' /></Link>
      </div>
    </nav>
  );
}

export default Navbar;
