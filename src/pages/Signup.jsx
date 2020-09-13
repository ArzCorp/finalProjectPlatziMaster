import React from 'react';

import Logo from '../../public/assets/logo/logo.svg';
import SignupForm from '../components/organisms/SignupForm';
import PrivacyPolicy from '../components/atoms/PrivacyPolicy';

const Signup = () => (
  <section className="signup-container">
    <div className="signup">
      <div className="row signup__title">
        <h1>Crear cuenta</h1>
      </div>

      <div className="signup__body">
        <div className="row signup__body-entry">
          <p>
            ¡Hey! Tal vez tienes una
            prenda de ropa que ya
            no usas pero que está
            en buen estado.
          </p>
          <img
            src={Logo}
            alt="Logotipo"
          />
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

        <div className="row signup__body-form">
          <h1>Crear cuenta</h1>
          <SignupForm />
        </div>
      </div>

      <div className="row">
        <PrivacyPolicy />
      </div>
    </div>
  </section>
);

export default Signup;
