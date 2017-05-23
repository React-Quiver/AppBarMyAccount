jest.unmock('../AppBarMyAccount');

import React from 'react';
import { shallow } from 'enzyme';

describe('AppBarMyAccount', () => {
  it('should work', () => {
    const AppBarMyAccount = require('../AppBarMyAccount');
    const wrapper = shallow(
      <AppBarMyAccount />
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('Hay.');
  });

  it('should render all the card components', () => {
    const AppBarMyAccount = require('../AppBarMyAccount');
    const wrapper = shallow(
      <AppBarMyAccount text="It works!" />
    );

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('It works!');
  });
});
