import React from 'react';
import { mount } from 'enzyme';
import SignupForm from '../../components/organisms/SignupForm';

describe('Signup form, molecule testing', () => {
  const singupForm = mount(<SignupForm />);
  test('molecule rendering', () => {
    expect(singupForm.length).toEqual(1);
  });
});
