import React from 'react';
import './Header.css';
import logo from '/images/logo-com-b.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Bethinha - Papelaria Fofa" className="logo" />
      <h1>Bethinha - Papelaria Fofa</h1>
      <p>A sua papelaria online cheia de fofuras!</p>
      <a
        href="https://www.instagram.com/bethinha.papelariafofa/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        Siga-nos no Instagram
      </a>
      <p>
        <strong>Contato:</strong> 
        <a href="https://wa.me/558585602701" target="_blank" rel="noopener noreferrer">
          +55 85 8560-2701
        </a>
      </p>
    </header>
  );
};

export default Header;
