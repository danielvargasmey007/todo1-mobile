import 'react-native';
import React from 'react';
import Transaction from './Transaction';
import renderer from 'react-test-renderer';

let transaction;

beforeEach(() => {
    navigate = jest.fn();
    const props = {
        navigation: {
            navigate: navigate
        },
    };
    transaction = renderer.create(<Transaction {...props} />).getInstance();
});


it('render', () => {
    renderer.create(<Transaction />);
});

it('onQRScann', () => {
    transaction.onQRScann();
    expect(navigate).toHaveBeenCalled();
});

it('onQRGerenation', () => {
    transaction.onQRGerenation();
    expect(navigate).toHaveBeenCalled();
});
