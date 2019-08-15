import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'
import TopHeader from '../Common/Header/Header';
import styles from './Transaction.style';

class Transaction extends Component {

    state = { id: '', password: '', noUser: true, noPass: true }

    constructor(props) {
        super(props)
        this.navigation = this.props.navigation;
        this.onQRScann = this.onQRScann.bind(this);
        this.onQRGerenation = this.onQRGerenation.bind(this);
    }

    onQRScann() {
        this.navigation.navigate('QRScanner');

    }

    onQRGerenation() {
        this.navigation.navigate('QRGenerator');
    }

    render() {
        return (
            <View>
                <TopHeader />
                <View style={styles.container}>
                    <Text style={styles.text}>Aquí podras realizar tus transacciones tan simple como utilizar tu código QR.</Text>
                    <View style={styles.bottom}>
                        <Button borderRadius={5} buttonStyle={styles.button} textStyle={styles.textButton} onPress={this.onQRGerenation}
                            containerViewStyle={styles.containerButtomTop}
                            title='Generar Código QR'
                        />
                        <Button borderRadius={5} buttonStyle={styles.button} textStyle={styles.textButton} onPress={this.onQRScann}
                            containerViewStyle={styles.containerButtom}
                            title='Transferir usando la Camara'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default Transaction;
