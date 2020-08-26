import React, { PureComponent } from 'react';
import Icon from './Icon';
import Button from './Button';

import AddImageModal from '../organisms/AddImageModal';

class ImageProfile extends PureComponent {
  render() {
    const { url, isOpenModal, isOpen, isClose } = this.props;
    return (
      <div className="profile">
        <img className="profile__image" alt="perfil" src={url} />
        <Button
          className="btn"
          onClick={() => {
            isOpen('isOpenImage');
          }}
          type="outline"
          name={
            <Icon color="$Color-Primary" iconName="camera" />
          }
        />
        <AddImageModal isOpenModal={isOpenModal} isOpen={isOpen} isClose={isClose} />
      </div>
    );
  }
}

export default ImageProfile;
