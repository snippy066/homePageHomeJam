import React from 'react';
import logo from "../images/logo.png";
import check from '../images/icons/check.png'

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className="headerLogo">
        <img src={logo} alt="" className='logo'/>
      </div>
      <nav className='pcView'>
        <span className="navSearch">
          <i className="far fa-search"></i>
          <span>Search</span>
        </span>
        <span>Help</span>
        <span>Account</span>
        <span>
          <img src={check} alt="" />
        </span>
      </nav>
      <nav className='mobileView'>
          <i className="far fa-search"></i>
          <img src={check} alt="" />
          <i className="far fa-bars"></i>
      </nav>
    </div>)
};

export default Header;
