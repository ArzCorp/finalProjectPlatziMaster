import React, { PureComponent } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

class EditProfile extends PureComponent {
  render() {
    const sendChange = () => {
      alert('Hol mundo');
    };
    return (
      <section className="useredit">
        <div className="column-6">
          <h2>Configracion del perfil</h2>
          <form className="useredit__form" method="post" name="usereditform" onSubmit={sendChange}>
            <small>Informacion pérsonal</small>
            <Input
              label="nombre"
              placeholder="nombre"
            />
            <Input
              label="Apellidos"
              placeholder="Apellidos"
            />
            <Input
              label="telefono"
              placeholder="telefono"
            />
            <Input
              label="Ubicacion"
              placeholder="Ubicacion"
            />
            <Button
              type="normal"
              name="Guardar cambios"
            />
          </form>
        </div>
      </section>
    );
  }
}

export default EditProfile;
