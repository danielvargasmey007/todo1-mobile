import 'react-native';
import React from 'react';
import QRScanner from './QRScanner';
import renderer from 'react-test-renderer';
import HomeService from '../../../services/HomeService';
import TransactionService from '../../../services/TransactionService';

jest.mock('@react-native-community/async-storage', () => () => 'AsyncStorage');
jest.mock('react-native-qrcode-scanner', () => () => 'QRCodeScanner');

let qRScanner;
let navigate;

beforeEach(() => {
    navigate = jest.fn();
    const props = {
        navigation: {
            navigate: navigate
        },
    };
    qRScanner = renderer.create(<QRScanner {...props} />).getInstance();
});


it('render', () => {
    renderer.create(<QRScanner />);
});

it('getRodeCurrentAccount', async () => {
    TransactionService.getByNumber = jest.fn();

    await qRScanner.getRodeCurrentAccount();
    expect(TransactionService.getByNumber).toHaveBeenCalled();
});

it('onTransfering', async () => {
    qRScanner.state.currentAccount = 12345
    TransactionService.updateAccount = jest.fn();

    await qRScanner.onTransfering();
    expect(TransactionService.updateAccount).toHaveBeenCalledTimes(2);
    expect(navigate).toHaveBeenCalledTimes(1);
});




