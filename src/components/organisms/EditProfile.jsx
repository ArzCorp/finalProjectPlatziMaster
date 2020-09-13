import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const EditProfile = ({ editProfile }) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token, user: { last_name, username, first_name, city, state } } = jsonData;

  const [fields, setField] = useState(0);
  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await editProfile(fields, username, token, jsonData);
  };

  return (
    <section className="useredit">
      <div className="column-6">
        <h2>Configracion del perfil</h2>
        <form
          className="useredit__form"
          method="patch"
          name="usereditform"
          onSubmit={handleSubmit}
        >
          <small>Informacion pérsonal</small>
          <Input
            name="first_name"
            label="Nombre"
            placeholder="Nombre"
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
            label="Telefono"
            placeholder="Telefono"
            value={username}
            onChange={handleChange}
          />
          <Input
            name="city"
            label="Ciudad"
            placeholder="Ciudad"
            value={city || ''}
            onChange={handleChange}
          />
          <Input
            name="state"
            label="Estado"
            placeholder="Estado"
            value={state || ''}
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
