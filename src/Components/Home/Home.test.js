import 'react-native';
import React from 'react';
import Home from './Home';
import HomeService from '../../services/HomeService';
import renderer from 'react-test-renderer';

jest.mock('@react-native-community/geolocation', () => () => 'Geolocation');

let home;

beforeEach(() => {
    home = renderer.create(<Home />).getInstance();
});


it('render', () => {
    renderer.create(<Home />);
});


it('fetchAccounts', async () => {

    HomeService.getAccountByUid = jest.fn()
    await home.fetchAccounts();
    expect(HomeService.getAccountByUid).toHaveBeenCalled();
});


