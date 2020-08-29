import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../atoms/Icon';

const NavBar = () => (
  <nav className="navbar">
    <Link to="/profile">
      <Icon
        iconName="profile"
        size="25px"
        color="$Color-Grayscale-2"
      />
    </Link>
    <Link to="/feed">
      <Icon
        iconName="hanger"
        size="25px"
        color="$Color-PrimaryLight-3"
      />
    </Link>
    <Link to="/notifications">
      <Icon
        iconName="message"
        size="25px"
        color="$Color-PrimaryLight-3"
      />
    </Link>
  </nav>
);

export default NavBar;
