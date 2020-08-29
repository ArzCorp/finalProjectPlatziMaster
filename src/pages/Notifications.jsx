import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../actions/userActions';

import Navbar from '../components/organisms/NavBar';
import Notification from '../components/molecules/Notification';
import Loader from '../components/atoms/Loader';
import Prenda from '../../public/assets/images/image1.png';

const Notifications = (props) => {
  const [count, setCount] = useState(0);

  const validateNotifications = () => {
    if (!(props.userReducer.userNotifications.length)) {
      if (count === 0) {
        setCount(count + 1);
        props.fetchNotificationsUser(localStorage.getItem('token'));
        return (
          <div className="row">
            <Loader />
          </div>
        );
      }

      return (
        <div className="row">
          <p>No tienes Notificaciones nuevas</p>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="notifications__list column-6">
          {props.userReducer.userNotifications.map((item) => (
            <Notification
              key={item.clothe}
              id={item.clothe}
              title={item.value}
              user={item.user}
              picture={Prenda}
              iconType="whatsapp"
              body="Tienes un match pendiente, da click para contactar a la otra persona"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="notifications">
      <Navbar />
      <div className="wrapper">
        <div className="row">
          <div className="column-6 title">
            <h1>Notificaciones</h1>
          </div>
        </div>
        {validateNotifications()}
      </div>
    </section>
  );
};

const mapStateToProps = (redicers) => redicers;

export default connect(mapStateToProps, userActions)(Notifications);
