import React, { PureComponent } from 'react';

import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

class Settings extends PureComponent {
  render() {
    const { pullActive, pullDisable } = this.props;
    return (
      <div className="settings">
        <div className="settings__navbar">
          <Button
            type="normal"
            name={<Icon iconName="tshirt" color="white" size="35px" />}
            id="button-tshirt"
            onClick={() => {
              pullActive();
            }}
          />
          <Button
            type="normal"
            name={<Icon iconName="settings" color="white" size="35px" />}
            id="button-settings"
            onClick={() => {
              pullDisable();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Settings;
