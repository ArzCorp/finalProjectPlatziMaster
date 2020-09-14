import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const EditProfile = ({ editProfile }) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token, user: { last_name, username, first_name } } = jsonData;

  const [fields, setField] = useState(0);
  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await editProfile(fields, username, token);
  };

  return (
    <section className="useredit">
      <div className="column-6">
        <h2>Configración del perfil</h2>
        <form
          className="useredit__form"
          method="patch"
          name="usereditform"
          onSubmit={handleSubmit}
        >
          <h3>Información personal</h3>
          <Input
            name="first_name"
            label="Nombre"
            placeholder="nombre"
            value={first_name}
            onChange={handleChange}
          />
          <Input
            name="last_name"
            label="Apellidos"
            placeholder="Apellidos"
            value={last_name}
            onChange={handleChange}
          />
          <Input
            name="phone_number"
            label="Teléfono"
            placeholder="telefono"
            value={username}
            onChange={handleChange}
          />
          <Button
            type="normal"
            name="Editar"
          />
        </form>
      </div>
    </section>
  );
};
const mapStateToProps = ({ userReducer }) => ({
  userReducer,
});

export default connect(mapStateToProps, userActions)(EditProfile);
