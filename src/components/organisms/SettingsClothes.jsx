import React from 'react';

import EditProfile from './EditProfile';
import AddClothe from '../atoms/AddClothe';
import EditeClothe from '../atoms/EditClothe';

const Settings = ({ isButtonActive }) => {
  if (isButtonActive) {
    return (
      <div className="clothes">
        <AddClothe />
        <EditeClothe
          src="https://i.ibb.co/c2TQmVz/chamarra.jpg"
          type=""
        />
      </div>
    );
  }
  return (
    <EditProfile />
  );
};

export default Settings;
