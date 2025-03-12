import React, { useEffect, useState } from 'react';
import './Menu.css';
import menuData from './Data/menu.json';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <a href={item.Link}>{item.FeatureName}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
