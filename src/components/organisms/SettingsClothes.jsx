import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as buttonsActions from '../../actions/ButtonsActions';

import EditProfile from './EditProfile';
import AddClothe from '../atoms/AddClothe';
import EditClothe from '../atoms/EditClothe';
import EditClotheModal from './EditClotheModal';

const SettingsClothes = (props) => {
  const data = localStorage.getItem('user');
  const jsonData = JSON.parse(data);
  const { token } = jsonData;
  const clothes = localStorage.getItem('clothes');
  const jsonClothes = JSON.parse(clothes);
  const { getUserClothes, buttonsReducers: { isButtonActive }, userReducer: { clothesObtained, userClothes, clotheId } } = props;
  if (!clothesObtained) {
    getUserClothes(token);
    return userClothes;
  }

  if (!jsonClothes) {
    if (isButtonActive) {
      return (
        <>
          <div className="clotheList">
            <AddClothe />
          </div>
        </>
      );
    }
  }

  const printClothe = () => (
    jsonClothes.results.map(({ id, picture, category }) => (
      <EditClothe
        key={id}
        clotheId={id}
        src={picture}
        category={category}
      />
    ))
  );

  if (isButtonActive) {
    return (
      <>
        <div className="clotheList">
          <AddClothe />
          {printClothe()}
        </div>
        <EditClotheModal clotheId={clotheId} />
      </>
    );
  }
  return (
    <EditProfile />
  );
};

const mapStateToProps = ({ userReducer, buttonsReducers }) => ({
  userReducer,
  buttonsReducers,
});

const mapDipatchToProps = {
  ...userActions,
  ...buttonsActions,
};

export default connect(mapStateToProps, mapDipatchToProps)(SettingsClothes);
