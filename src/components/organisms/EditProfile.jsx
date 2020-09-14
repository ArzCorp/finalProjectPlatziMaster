import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

import Input from '../atoms/Input';
import Select from '../atoms/InputSelect';
import Button from '../atoms/Button';

const EditProfile = ({ editProfile }) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token, user: { last_name, username, first_name, profile: { city, state } } } = jsonData;

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
          <Select
            name="state"
            label="Estado"
            placeholder="Ciudad"
            value={state || ''}
            onChange={handleChange}
          >
            <option value="no">Seleccione uno...</option>
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California">Baja California</option>
            <option value="Baja California Sur">Baja California Sur</option>
            <option value="Campeche">Campeche</option>
            <option value="Chiapas">Chiapas</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="CDMX">Ciudad de México</option>
            <option value="Coahuila">Coahuila</option>
            <option value="Colima">Colima</option>
            <option value="Durango">Durango</option>
            <option value="Estado de México">Estado de México</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Jalisco">Jalisco</option>
            <option value="Michoacán">Michoacán</option>
            <option value="Morelos">Morelos</option>
            <option value="Nayarit">Nayarit</option>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Oaxaca">Oaxaca</option>
            <option value="Puebla">Puebla</option>
            <option value="Querétaro">Querétaro</option>
            <option value="Quintana Roo">Quintana Roo</option>
            <option value="San Luis Potosí">San Luis Potosí</option>
            <option value="Sinaloa">Sinaloa</option>
            <option value="Sonora">Sonora</option>
            <option value="Tabasco">Tabasco</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Tlaxcala">Tlaxcala</option>
            <option value="Veracruz">Veracruz</option>
            <option value="Yucatán">Yucatán</option>
            <option value="Zacatecas">Zacatecas</option>
          </Select>
          <Input
            name="city"
            label="Ciudad"
            placeholder="Ciudad"
            value={city || ''}
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
