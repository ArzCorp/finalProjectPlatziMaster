import React, { useState } from 'react';


import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SignupForm = () => {
  const [dataUser, setDataUser] = useState(0);

  const handleChange = (ev) => {
    setDataUser({
      ...dataUser,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleClick = (ev) => {
    console.log(dataUser);
    ev.preventDefault();
  };

  return (
    <form className="SignupForm">
      <Input
        type="text"
        label="Name"
        placeholder="Name"
        name="first_name"
        onChange={handleChange}
      />
      <Input
        type="text"
        label="LastName"
        placeholder="LastName"
        name="last_name"
        onChange={handleChange}
      />
      <Input
        type="number"
        label="Phone"
        placeholder="Phone"
        name="username"
        onChange={handleChange}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <Button name="Signup" onClick={handleClick}/>
    </form>
  );
};

export default SignupForm;
