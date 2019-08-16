import 'react-native';
import React from 'react';
import TopHeader from './Header';

import renderer from 'react-test-renderer';


it('render', () => {
  renderer.create(<TopHeader/>);
});
