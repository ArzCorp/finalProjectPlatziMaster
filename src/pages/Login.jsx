import React from 'react';
import { Helmet } from 'react-helmet';

import Logo from '../../public/assets/logo/logo.svg';
import LoginForm from '../components/organisms/LoginForm';
import PrivacyPolicy from '../components/atoms/PrivacyPolicy';

const Login = () => (
  <section className="loginPage">
    <Helmet>
      <title>Ourclothe - Iniciar Sesión</title>
      <meta
        name="description"
        content="Bienvenido a Ourclothe! Nuestra cultura de intercambio en comunidad
        te permitirá encontrar un nuevo estilo para tí entre toda la ropa publicada por nuestros usuarios"
      />
    </Helmet>
    <div className="row login" id="login">
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
