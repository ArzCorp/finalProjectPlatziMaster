import React from 'react';

import Icon from './Icon';

const IconButton = (props) => {
  const {
    iconName, size, colorIcon, handleClick, bgColor, space, type, id,
  } = props;
  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      style={{
        backgroundColor: ` ${bgColor} `,
        width: `${space}`,
        height: `${space}`,
        boxShadow: `var(--Box-Shadow-no-color) ${bgColor}`,
      }}
      className={`icon-button icon-button--${type}`}
    >
      <Icon iconName={iconName} size={size} color={colorIcon} />
    </button>
  );
};

export default IconButton;
