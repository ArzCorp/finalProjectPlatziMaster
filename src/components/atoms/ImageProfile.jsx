import React from 'react';
import Icon from './Icon';

const ImageProfile = (props) => {
  const config = props;
  const { imageProfile, onClick } = config;
  return (
    <div>
      <img alt="perfil" src={imageProfile} />
      <button
        className="btn"
        onClick={onClick}
        type="button"
      >
        <Icon color="red" iconName="camera" />
      </button>
    </div>
  );
};

export default ImageProfile;
