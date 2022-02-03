import React from 'react';
import logo from '../../images/logo.png';
import './style.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Recipe APP</h1>
      <button type='button'>Login</button>
    </header>
  );
}
