import React from 'react';
import { shallow } from 'enzyme';
import NavButton from './NavButton';

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn()
}));

describe('NavButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <NavButton nav='/' name='home' />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire logout', () => {
    wrapper.find('#logoutButton').simulate('click');

    expect(wrapper.find('#logoutButton').prop('value')).toEqual('home');
  });

});
