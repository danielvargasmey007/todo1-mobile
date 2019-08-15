import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, Image, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements'
import { doLogin } from '../../services/SecurityService';
import styles from './Login.style';

class Login extends Component {

    state = { id: '', password: '', noUser: true, noPass: true, response: null, loading: false }

    constructor(props) {
        super(props)
        this.navigation = this.props.navigation;
        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFailed = this.onLoginFailed.bind(this);
    }

    async onSubmit() {

        if (!this.state.id || !this.state.password) {
            this.setState({ noUser: this.state.id, noPass: this.state.password });
        } else {
            const { id, password } = this.state;
            this.setState({ loading: true });
            let response = await doLogin(id, password);
            this.setState({ loading: false });
            if (response) {
                this.onLoginSuccess();
            } else {
                this.onLoginFailed();
            }
        }
    }

    onLoginSuccess() {
        this.setState({ password: '' });
        this.navigation.navigate('Home');
    }

    onLoginFailed() {
        alert('¡Oops! Tu usuario o contraseña no coinciden.');
    }


    render() {
        return (
            <View style={(this.state.loading) ? styles.loadinView : {}}>
                {(this.state.loading) ?
                    <ActivityIndicator size="large" color="#08104D" />
                    :
                    <KeyboardAvoidingView keyboardVerticalOffset={-150} behavior="position">
                        <View style={styles.container}>
                            <View style={styles.top}>
                                <Image
                                    source={require('../../../assets/image/todo1-300x150.png')}
                                    style={styles.Image}
                                />
                            </View>
                            <View style={styles.medium}>
                                <View>
                                    <Text style={styles.TextCenter} numberOfLines={2}>
                                        Bienvenido,{'\n'}Por favor ingresa a tu cuenta.
                                </Text>
                                </View>
                                <FormInput
                                    inputStyle={[styles.input, (this.state.noUser) ? styles.inputBar : styles.inputBarBad]}
                                    placeholder='Usuario'
                                    value={this.state.id}
                                    onChangeText={(id) => this.setState({ id, noUser: (id) ? true : false })}
                                />
                                <FormValidationMessage containerStyle={[styles.containerI, (this.state.noUser) ? styles.off : styles.on]}>*Completa este campo.</FormValidationMessage>
                                <FormInput
                                    inputStyle={[styles.input, (this.state.noPass) ? styles.inputBar : styles.inputBarBad]}
                                    placeholder='Contraseña'
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({ password, noPass: (password) ? true : false })}
                                />
                                <FormValidationMessage containerStyle={[styles.containerI, (this.state.noPass) ? styles.off : styles.on]}>*Completa este campo.</FormValidationMessage>

                            </View>
                            <View style={styles.bottom}>
                                <Button borderRadius={5} buttonStyle={styles.button} textStyle={styles.textButton} onPress={this.onSubmit}
                                    containerViewStyle={styles.containerButtom}
                                    title='Ingresar'
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                }
            </View>
        );
    }
}

export default Login;
