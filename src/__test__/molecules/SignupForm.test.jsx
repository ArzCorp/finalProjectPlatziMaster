import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from '../../components/organisms/SignupForm';

describe('Signup form, molecule testing', () => {
  const singupForm = mount(
    <MemoryRouter>
      <SignupForm />
    </MemoryRouter>
  );
  test('molecule rendering', () => {
    expect(singupForm.length).toEqual(1);
  });
});
