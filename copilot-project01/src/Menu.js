import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Menu.css';
import menuData from './Data/menu.json';

const MenuItem = ({ item }) => {
  return (
    <>
      {item.IsParent ? (
        <Card className="menu-item">
          <CardContent>
            <Typography variant="h6">{item.FeatureName}</Typography>
            {item.SubFeatures && Array.isArray(item.SubFeatures) && item.SubFeatures.map((subItem, index) => (
              <MenuItem key={index} item={subItem} />
            ))}
          </CardContent>
        </Card>
      ) : (
        <a href={item.Link} className="menu-item-link">{item.FeatureName}</a>
      )}
    </>
  );
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  return (
    <Container className="menu-page">
      <Typography variant="h4">Menu</Typography>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Menu;
