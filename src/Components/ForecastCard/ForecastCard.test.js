import 'react-native';
import React from 'react';
import ForecastCard from './ForecastCard';
import renderer from 'react-test-renderer';
import { Alert } from 'react-native';

jest.mock('@react-native-community/geolocation', () => () => 'Geolocation');
jest.mock('Alert', () => {
    return {
        alert: jest.fn()
    }
});

let forecastCard;

beforeEach(() => {
    forecastCard = renderer.create(<ForecastCard alert={jest.fn()} />).getInstance();
});


it('render', () => {
    renderer.create(<ForecastCard />);
});

it('componentDidMount', async () => {
    forecastCard.getLocation = jest.fn();
    await forecastCard.componentDidMount();
    expect(forecastCard.getLocation).toHaveBeenCalled();
});
