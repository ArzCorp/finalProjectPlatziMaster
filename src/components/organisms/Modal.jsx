import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const Modal = ({ modalState, onCloseModal, children }) => {
  if (!modalState) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        <div className="modal__close">
          <Button
            type="danger"
            name={(
              <Icon
                iconName="Cross"
                color="red"
              />
            )}
            onClick={onCloseModal}

          />
        </div>
        {children}
      </div>
    </div>, document.getElementById('modal'),
  );
};

export default Modal;
