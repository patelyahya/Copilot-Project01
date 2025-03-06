import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ username, onLogout }) => {
  return (
    <header className="header">
      <div className="header-left">
        {username}
      </div>
      <div className="header-center">
        ERP Solution
      </div>
      <div className="header-right">
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
