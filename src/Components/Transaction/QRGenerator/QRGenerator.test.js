import 'react-native';
import React from 'react';
import QRGenerator from './QRGenerator';
import renderer from 'react-test-renderer';

// omite el warning de props del componente QR
console.error = jest.fn();

let qRGenerator;

beforeEach(() => {
    qRGenerator = renderer.create(<QRGenerator />).getInstance();
});


it('render', () => {
    renderer.create(<QRGenerator />);
});

it('generator', async () => {
    qRGenerator.state.currentAccount = 12345;
    qRGenerator.state.currency = true;
    qRGenerator.state.rode = 123;
    await qRGenerator.generator();
    expect(qRGenerator.state.body).not.toEqual(JSON.stringify([qRGenerator.state.currency, qRGenerator.state.rode]));
    expect(qRGenerator.state.isSubmit).toEqual(true);
});
