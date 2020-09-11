import React from 'react';
import '../../../public/assets/fonts/style.css';
import '../../../public/assets/fonts/icon.css';

const Icon = (props) => {
  const config = props;
  const { iconName, size, color, value } = config;
  return (
    <span
      className={`default-icon our-icon-${iconName}`}
      style={{ fontSize: `${size}`, color: `${color}` }}
      value={value}
    />
  );
};

export default Icon;
