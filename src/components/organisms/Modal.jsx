import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import IconButton from '../atoms/IconButton';

const Modal = ({ isOpenModal, type, isClose, children }) => {
  if (!isOpenModal) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        <div className="modal__close">
          <IconButton 
            iconName="Cross"
            handleClick={() => {
              isClose(type);
            }}
          />
        </div>
        {children}
      </div>
    </div>, document.getElementById('modal'),
  );
};

export default Modal;
