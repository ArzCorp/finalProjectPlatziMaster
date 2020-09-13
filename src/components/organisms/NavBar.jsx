import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

import Icon from '../atoms/Icon';
import Logo from '../../../public/assets/logo/logo-negative.svg';

const NavBar = (props) => {
  const goToLogout = () => {
    localStorage.clear();
    props.logout();
    setTimeout(() => {
      window.location.href = '/#/login';
    }, 500);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logotipo Ourclothe" />
      </div>
      <div className="navbar__menu">
        <NavLink to="/profile" activeClassName="active" id="profile">
          <Icon
            iconName="profile"
            size="25px"
            color="#fff"
          />
        </NavLink>
        <NavLink to="/feed" activeClassName="active">
          <Icon
            iconName="hanger"
            size="25px"
            color="#fff"
          />
        </NavLink>
        <NavLink to="/notifications" activeClassName="active">
          <Icon
            iconName="message"
            size="25px"
            color="#fff"
          />
        </NavLink>
        <div className="navbar__menu-logout">
          <Icon
            iconName="settings"
            size="25px"
            color="#F9FAFA"
          />
        </div>
        <span
          className="navbar__menu-logout-button"
          onClick={() => goToLogout()}
        >
          Salir
        </span>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(NavBar);
