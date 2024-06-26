import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-sm text-light custom-navbar'>
        <div className='container'>
          <h1 className='navbar-brand'>Quiz Application <i class="fa-solid fa-gamepad"></i></h1>
          <div className='navbar-nav ml-auto'>
            <Link to="/" className='nav-link text-light'>Home <i class="fa-solid fa-house"></i></Link>
            <Link to="/result" className='nav-link text-light ml-5'>Result <i class="fa-solid fa-square-poll-vertical"></i></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}