import React from 'react';
import '../../../public/assets/fonts/style.css';
import '../../../public/assets/fonts/icon.css';

const Icon = (props) => {
  const config = props;
  const { idIcon, iconName, size, color, value } = config;
  return (
    <span
      id={idIcon}
      className={`default-icon our-icon-${iconName}`}
      style={{ fontSize: `${size}`, color: `${color}` }}
      value={value}
    />
  );
};

export default Icon;
