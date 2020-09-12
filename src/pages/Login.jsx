import React from 'react';

import Logo from '../../public/assets/logo/logo.svg';
import LoginForm from '../components/organisms/LoginForm';
import PrivacyPolicy from '../components/atoms/PrivacyPolicy';

const Login = () => (
  <section className="loginPage">
    <div className="row login">
      <div className="column-6">
        <div className="login__logo">
          <img src={Logo} alt="Logotipo" />
        </div>
        <h1>Iniciar Sesión</h1>
        <LoginForm />
      </div>
      <div className="row login__privacyPolicy">
        <PrivacyPolicy />
      </div>
    </div>
  </section>
);

export default Login;
