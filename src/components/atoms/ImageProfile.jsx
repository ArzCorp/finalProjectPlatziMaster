import React from 'react';
import Icon from './Icon';

const ImageProfile = (props) => {
  const config = props;
  const { imageProfile, onClick } = config;
  return (
    <div className="profile">
      <img className="profile__image" alt="perfil" src={imageProfile} />
      <button
        className="btn"
        onClick={onClick}
        type="button"
      >
        <Icon color="$Color-Primary" iconName="camera" />
      </button>
    </div>
  );
};

export default ImageProfile;
