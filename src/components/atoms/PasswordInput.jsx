import React, { useState } from 'react';
import Input from './Input';
import IconButton from './IconButton';

const PasswordInput = (props) => {
  const { onChange, label, placeholder, name, tabIndex } = props;
  const [hide, setHide] = useState(true);
  const showPassword = () => setHide(!hide);

  return (
    <div className="paswordInput">
      <Input
        type={hide ? 'password' : 'text'}
        label={label}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <div className="paswordInput__showPassword">
        <IconButton
          tabIndexName="Ver contraseña"
          iconName="eye"
          colorIcon={hide ? '#838F8C' : '#19704E'}
          bgColor="transparent"
          size="20px"
          handleClick={() => showPassword()}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
