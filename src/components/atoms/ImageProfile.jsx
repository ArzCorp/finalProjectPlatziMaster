import React from 'react';
import Icon from './Icon';
import Button from './Button';

const ImageProfile = (props) => {
  const config = props;
  const { url, onClick } = config;
  return (
    <div className="profile">
      <img className="profile__image" alt="perfil" src={url} />
      <Button
        className="btn"
        onClick={onClick}
        type="outline"
        name={
          <Icon color="$Color-Primary" iconName="camera" />
        }
      />
    </div>
  );
};

export default ImageProfile;
