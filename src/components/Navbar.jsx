import React, { useState } from 'react';
import './Navbar.css';
import underline from '../assets/nav_underline.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
  };

  return (
    <div className="Navbar">
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick('home')}>
          <a className="anchor-link" href="#home">
            <p>Home</p>
          </a>
          {menu === 'home' && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => handleMenuClick('about')}>
          <a className="anchor-link" href="#about">
            <p>About me</p>
          </a>
          {menu === 'about' && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => handleMenuClick('services')}>
          <a className="anchor-link" href="#project">
            <p>Projects</p>
          </a>
          {menu === 'services' && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => handleMenuClick('work')}>
          <a className="anchor-link" href="#certificate">
            <p>Certificate</p>
          </a>
          {menu === 'work' && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => handleMenuClick('contact')}>
          <a className="anchor-link" href="#cntct">
            <p>Contact</p>
          </a>
          {menu === 'contact' && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
  <a className="anchor-link" href="#cntct">Connect with me</a>
</div>

    </div>
  );
};

export default Navbar;
