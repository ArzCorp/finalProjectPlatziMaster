import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from '../atoms/IconButton';

const Modal = ({ modalState, onCloseModal, children, closeButton }) => {
  if (!modalState) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        {closeButton && (
          <div className="modal__close">
            <IconButton
              iconName="Cross"
              handleClick={onCloseModal}
            />
          </div>
        )}
        {children}
      </div>
    </div>, document.getElementById('modal'),
  );
};

export default Modal;
