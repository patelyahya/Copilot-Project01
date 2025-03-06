import React from 'react';

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

export default Header;
