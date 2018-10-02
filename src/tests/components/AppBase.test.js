import React from 'react';
import { shallow } from 'enzyme';
import AppBase from '../../components/AppBase';
import state from '../fixtures/mockedState';


test('should render AppBase correctly', () => {
  const wrapper = shallow(<AppBase />)
  expect(wrapper).toMatchSnapshot();
});

test('should render AppBase with mocked images data', () => {
  const wrapper = shallow(<AppBase />);
  wrapper.setState(() => ({ ...state }));
  expect(wrapper).toMatchSnapshot();
});



