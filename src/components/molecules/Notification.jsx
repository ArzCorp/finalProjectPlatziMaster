import React from 'react';
import Icon from '../atoms/Icon';
import IconButton from '../atoms/IconButton';

const Notification = ({ picture, title, body, iconType }) => (
  <div className="notification">
    {picture && (
      <div className="notification__picture">
        <img src={picture} />
      </div>
    )}
    <div className="notification__body">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
    <div className="notification__iconType">
      <Icon
        iconName={iconType}
        size="3rem"
        color="$Color-PrimaryLight-3"
      />
    </div>
    <div className="notification__deletNotification">
      <IconButton
        iconName="Cross"
        colorIcon="#fff"
        bgColor="gray"
        space="1rem"
        size=".5rem"
        handleClick={() => alert('Notification deleted')}
      />
    </div>
  </div>
);

export default Notification;
// cons clothes/notifications/
