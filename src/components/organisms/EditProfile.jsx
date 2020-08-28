import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const EditProfile = ({ EditProfile, userReducer: { userLoged: { user: { first_name, last_name, username } } } }) => {
  const [fields, setField] = useState(0);

  const handleChange = (ev) => {
    setField({
      ...fields,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <section className="useredit">
      <div className="column-6">
        <h2>Configracion del perfil</h2>
        <form
          className="useredit__form"
          method="patch"
          name="usereditform"
          onSubmit={() => { EditProfile(fields, username); }}
        >
          <small>Informacion pérsonal</small>
          <Input
            name="first_name"
            label="nombre"
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
            label="telefono"
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
