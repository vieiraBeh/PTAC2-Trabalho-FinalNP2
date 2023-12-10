import React from 'react';
import Menu from './Menu';
import '../Styles/Navbar.css';

export default function Navbar({ nomeSite }) {
  return (
    <nav className="Navbar">
      <h1>{nomeSite}</h1>
      <Menu />
    </nav>
  );
}