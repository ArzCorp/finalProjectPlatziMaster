import React from 'react';
import Icon from '../atoms/Icon';
import IconButton from '../atoms/IconButton';

const Notification = ({ user, picture, title, body, article, iconType, id }) => {
  const closeNotification = ($id) => {
    const notification = document.getElementById($id);
    notification.style.display = 'none';
  };

  const goToWhatsapp = () => window.open(`https://api.whatsapp.com/send?phone=52${user}`, '_blank');

  return (
    <div className="notification-container" id={id}>
      <div
        className="notification"
        onClick={iconType == 'whatsapp'
          ? () => goToWhatsapp()
          : null
        }
      >
        {picture && (
          <div className="notification__picture">
            <img src={picture} alt="Foto de la prenda" />
          </div>
        )}
        <div className="notification__body">
          <h2>
            {title} <small>¡Alguien se interesa en tu(s) {article}!</small>
          </h2>
          <p>{body}</p>
        </div>
        <div className="notification__iconType">
          <Icon
            iconName={iconType}
            size="2.5rem"
            color="$Color-PrimaryLight-3"
          />
        </div>
      </div>
      <div className="notification__deletNotification">
        <IconButton
          iconName="Cross"
          colorIcon="#fff"
          bgColor="gray"
          space="1rem"
          size=".5rem"
          handleClick={() => closeNotification(id)}
        />
      </div>
    </div>
  );
};

export default Notification;
