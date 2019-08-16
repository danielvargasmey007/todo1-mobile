import 'react-native';
import React from 'react';
import Product from './Product';

import renderer from 'react-test-renderer';

let product;

beforeEach(() => {
    product = renderer.create(<Product />).getInstance();
});


it('render', () => {
    renderer.create(<Product />);
});

it('componentWillReceiveProps', async () => {
    let mockData = { accounts: { numer: 12345, name: 'Ahorro' } };
    await product.componentWillReceiveProps(mockData);
    expect(product.state.account).toEqual(mockData.accounts);
});


