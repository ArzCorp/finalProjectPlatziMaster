import React from 'react';
import Icon from '../atoms/Icon';

const Alert = (props) => {

  const { type, id, text, style } = props; 

  return (
    <div className={`clouth-alert clouth-alert--${type}`} id={id || null} style={style}>
      <Icon
        iconName={type}
        size="2.5rem"
      />
        <p>{text}</p>
    </div>
  );
};

export default Alert;
