/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="button">Search</button>
      </div>
    </nav>
  );


export default Navbar;
