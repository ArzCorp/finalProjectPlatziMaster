import React from 'react';
import '../style/pages/Signup.scss';

import SignupForm from '../components/organisms/SignupForm';

const Signup = () => (
  <section className="loginPage">
    <div className="wrapper">
      <div className="row">
        <div className="column-6 loginPage__entry">
          <p>
            ¡Hey! Tal vez tienes una
            prenda de ropa que ya
            no usas pero que está
            en buen estado.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column-6 loginPage__entry">
          <p>logo</p>
        </div>
      </div>
      <div className="row">
        <div className="column-6 loginPage__entry">
          <p>
            <strong>
              ourclothe
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
    <div className="wrapper">
      <div className="row loginPage__SignupForm">
        <div className="column-6">
          <SignupForm />
        </div>
      </div>
    </div>
  </section>
);

export default Signup;
