import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header-component">
        <NavLink to="/" className="logo"><h1>movie.com</h1></NavLink>
    </div>
  )
}
