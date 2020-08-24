import React, { PureComponent } from 'react';

import ImageProfile from '../components/atoms/ImageProfile';

class UserPerfil extends PureComponent {
  render() {
    return (
      <section>
        <div className="wrapper">
          <ImageProfile />
        </div>
      </section>
    );
  }
}

export default UserPerfil;
