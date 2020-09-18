import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as modalActions from '../../actions/ModalActions';
import Button from './Button';

const EditClothe = ({ category, src, turnModalState, clotheId, changeId }) => (
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
        changeId(clotheId);
      }}
    />
  </>
);

const mapStateToProps = ({ modalReducers }) => ({
  modalReducers,
});

const mapDipatchToProps = {
  ...userActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(EditClothe);
