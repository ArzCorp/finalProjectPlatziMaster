import React from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';
import EditClotheModal from '../organisms/EditClotheModal';
import Button from './Button';

const EditClothe = ({ category, src, turnModalState, }) => (
  <>
    <Button
      id="btn-editclothe"
      name={(
        <>
          <img
            src={src}
            alt={`imagen de ${category}`}
            className="clothe__image"
          />
          ,
          <h3>
            {category}
          </h3>
        </>
      )}
      onClick={() => {
        turnModalState('EditClotheModal', true);
      }}
    />
    <EditClotheModal />
  </>
);

const mapStateToProps = ({ modalReducers }) => ({
  modalReducers,
});

export default connect(mapStateToProps, modalActions)(EditClothe);
