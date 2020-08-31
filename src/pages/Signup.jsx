import React from 'react';

import Logo from '../../public/assets/logo/logo.svg';
import SignupForm from '../components/organisms/SignupForm';
import PrivacyPolicy from '../components/atoms/PrivacyPolicy';

const Signup = () => (
  <div className="signupPage">
    <section className="signupPage__entry">
      <div className="wrapper signupPage__entry-brand">
        <div className="row">
          <div className="column-6">
            <p>
              ¡Hey! Tal vez tienes una
              prenda de ropa que ya
              no usas pero que está
              en buen estado.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column-6">
            <img
              src={Logo}
              alt="Logotipo"
            />
          </div>
        </div>
        <div className="row">
          <div className="column-6">
            <p>
              <strong>
                Ourclothe
                {' '}
              </strong>
              te ofrece una comunidad
              para que la intercambies;
              claro, solo si haces match
              con otra persona y alguna
              de sus prendas.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper signupPage__entry-signupForm">
        <div className="row">
          <div className="column-6">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="wrapper">
        <div className="row">
          <PrivacyPolicy />
        </div>
      </div>
    </section>
  </div>
);

export default Signup;
