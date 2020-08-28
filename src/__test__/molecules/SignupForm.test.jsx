import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
// import { MemoryRouter } from 'react-router-dom';
import SignupForm from '../../components/organisms/SignupForm';

describe('Signup form, molecule testing', () => {
  test('Render molecule SignupForm', () => {
    const singupForm = shallow(
      <ProviderMock>
        <SignupForm />
      </ProviderMock>,
    );
    expect(singupForm.length).toEqual(1);
  });
});
