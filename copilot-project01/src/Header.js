import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaBars, FaPowerOff } from 'react-icons/fa';
import './Header.css';

const Header = ({ username, onLogout, onMenuClick, onTitleClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <FaUser size={20} /> {username.toUpperCase()}
      </div>
      <div className="header-center" >
        <FaBars size={20} onClick={onMenuClick} /> 
        <span onClick={onTitleClick}>ERP Solution</span>
      </div>
      <div className="header-right">
        <button onClick={onLogout}><FaPowerOff size={20} /> Logout</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default Header;
