import 'react-native';
import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer';

let login;

let navigate;
beforeEach(() => {
    navigate = jest.fn();
    const props = {
        navigation: {
            navigate: navigate
        },
    };
    login = renderer.create(<Login {...props} />).getInstance();
});


it('render', () => {
    renderer.create(<Login />);
});

it('on login success', async () => {

    await login.onLoginSuccess();
    expect(login.state.password).toEqual('')
    expect(navigate).toHaveBeenCalledTimes(1);

});

it('on login fail', async () => {
    login.onLoginFail = jest.fn();
    await login.onLoginFail();

    expect(login.onLoginFail).toHaveBeenCalled();
});

it('on submit', async () => {

    await login.onSubmit();
    expect(login.state.noPass).toEqual(login.state.password);
    expect(login.state.noUser).toEqual(login.state.id);
});

