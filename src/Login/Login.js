import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, Platform, Image } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from './Login.style';

class Login extends Component {

    state = { id: '', password: '', noUser: true, noPass: true }

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit() {

        if (!this.state.id || !this.state.password) {
            this.setState({ noUser: this.state.id, noPass: this.state.password });
        } else {
            const { id, password } = this.state;
            alert(id + password)

        }
    }


    render() {
        return (
            <View>
                <KeyboardAvoidingView keyboardVerticalOffset={-150} behavior="position">
                    <View style={styles.container}>
                        <View style={styles.top}>
                            <Image
                                source={{ uri: 'https://www.finnovista.com/wp-content/uploads/2018/07/todo1-300x150.png' }}
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
            </View>
        );
    }
}

export default Login;
