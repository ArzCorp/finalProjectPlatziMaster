import React from 'react';
import Navbar from '../components/organisms/NavBar';
import Notification from '../components/molecules/Notification';
import Prenda from '../../public/assets/images/image1.png';

const Notifications = () => {
  const a = 123;

  return (
    <section className="notifications">
      <Navbar />
      <div className="wrapper">
        <div className="row">
          <div className="column-6">
            <h1>Notificaciones</h1>
          </div>
        </div>
        <div className="row">
          <div className="notifications__list column-6">
            <Notification
              title="Completa tu perfil"
              body="Recuerda actualizar tu perfil, Recuerda actualizar tu perfil, Recuerda actualizar tu perfil"
              iconType="admiration"
            />
            <Notification
              picture={Prenda}
              title="Completa tu perfil"
              body="Recuerda actualizar tu perfil, Recuerda actualizar tu perfil, Recuerda actualizar tu perfil"
              iconType="whatsapp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
