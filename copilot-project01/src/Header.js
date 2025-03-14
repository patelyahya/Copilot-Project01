import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { FaUser, FaBars, FaPowerOff } from 'react-icons/fa';
import './Header.css';

const Header = ({ username, onLogout, onMenuClick, onTitleClick }) => {
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <div className="header-left">
          <Typography variant="body1">
            <FaUser size={20} /> {username.toUpperCase()}
          </Typography>
        </div>
        <div className="header-center">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
            <FaBars />
          </IconButton>
          <Typography variant="h6" onClick={onTitleClick} style={{ marginLeft: '10px' }}>
            ERP Solution
          </Typography>
        </div>
        <div className="header-right">
          <Button color="inherit" onClick={onLogout}>
            <FaPowerOff size={20} /> Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default Header;
