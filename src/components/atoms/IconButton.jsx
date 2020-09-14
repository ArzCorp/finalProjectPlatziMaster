import React from 'react';

import Icon from './Icon';

const IconButton = (props) => {
  const {
    iconName, size, colorIcon, handleClick, bgColor, space, type, id, disabled, tabIndexName,
  } = props;

  const disabledBgColor = () => disabled ? 'grey' : bgColor;

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      disabled={disabled}
      style={{
        backgroundColor: `${disabledBgColor()}`,
        width: `${space}`,
        height: `${space}`,
        boxShadow: `var(--Box-Shadow-no-color) ${bgColor}`,
      }}
      className={`icon-button icon-button--${type}`}
    >
      <Icon iconName={iconName} size={size} color={colorIcon} tabIndexName={tabIndexName} />
    </button>
  );
};

export default IconButton;
