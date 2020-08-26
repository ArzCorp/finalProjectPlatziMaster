import React, { PureComponent } from 'react';

import EditProfile from './EditProfile';
import AddClothe from '../atoms/AddClothe';
import EditeClothe from '../atoms/EditClothe';

class Settings extends PureComponent {
  render() {
    const { isActive, isOpenModalAdd, isOpenModalEdit, isOpen, isClose } = this.props;
    if (isActive) {
      return (
        <div className="clothes">
          <AddClothe
            isOpenModal={isOpenModalAdd}
            isOpen={isOpen}
            isClose={isClose}
          />
          <EditeClothe
            src="https://i.ibb.co/c2TQmVz/chamarra.jpg"
            type=""
            isOpenModal={isOpenModalEdit}
            isOpen={isOpen}
            isClose={isClose}
          />
        </div>
      );
    }
    return (
      <EditProfile />
    );
  }
}

export default Settings;
