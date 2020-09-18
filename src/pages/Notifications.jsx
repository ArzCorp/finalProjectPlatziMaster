import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import * as userActions from '../actions/userActions';

import Notification from '../components/molecules/Notification';
import Loader from '../components/atoms/Loader';

const Notifications = (props) => {
  const validateNotifications = () => {
    useEffect(() => {
      props.fetchNotificationsUser(localStorage.getItem('token'));
    }, []);

    return (
      <div className="row">
        <div className="notifications__list column-6">
          {props.userReducer.userNotifications.map((item) => (
            <Notification
              key={`${item.clothe.id}-${item.user}`}
              id={item.clothe.id}
              title={item.value}
              user={item.user}
              picture={item.clothe.picture}
              article={item.clothe.category}
              iconType="whatsapp"
              // body="Tienes un match pendiente, da click para contactar a la otra persona"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="notifications">
      <Helmet>
        <title>Ourclothe - Notificaciones</title>
        <meta
          name="description"
          content="Recibirás una notificación cuando hagas match con otro usuario.
            Podrán ponerse en contacto a travez de WhatsApp para acordar el intercambio"
        />
      </Helmet>
      <div className="wrapper">
        <div className="row">
          <div className="column-6">
            <h1>Notificaciones</h1>
          </div>
        </div>
        {props.userReducer.loading && (
          <div className="row">
            <Loader />
          </div>
        )}
        {(!(props.userReducer.loading) && !(props.userReducer.userNotifications.length)) && (
            <div className="row">
              <p>No tienes Notificaciones nuevas</p>
            </div>
        )}
        {validateNotifications()}
      </div>
    </section>
  );
};

const mapStateToProps = (reducers) => reducers;

export default connect(mapStateToProps, userActions)(Notifications);
