import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <header className="header">
      <img src="https://i.pinimg.com/originals/6b/87/9f/6b879fc35b3e8bd32e111703107d12e0.png" alt="Logo" className="logo-image"/>
      <nav className='nav-links'>
        <ul>
          <li>
            <NavLink to="/" className="active">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/newquote" className="active">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
