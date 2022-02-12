import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import './style.css';

export default function Header() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')) | '');

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user')));
  }, []);


  const handleCLickLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (

    <header>
      <img src={logo} alt="logo" onClick={() => navigate('/')} />
      <h1>{userData.name || ''}</h1>
      <button type='button' onClick={handleCLickLogout}>Logout</button>
    </header>
  );
}
