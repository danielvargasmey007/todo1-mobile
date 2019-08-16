import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import TransactionService from '../../../services/TransactionService';
import HomeService from '../../../services/HomeService';
import { getUid } from '../../../services/SecurityService';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import { View } from 'react-native';
import styles from './QRScanner.style';


class QRScanner extends Component {
    state = {
        account: null,
        account1: '',
        account2: '',
        rode1: 0,
        rode2: 0,
        valTransfer: 0,
        isSubmit: false
    };

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
        this.onTransfering = this.onTransfering.bind(this);
        this.fetchAccounts = this.fetchAccounts.bind(this);
    }

    componentWillMount() {
        this.fetchAccounts();
    }

    async fetchAccounts() {
        let uid = await getUid();
        HomeService.getAccountByUid(uid, (account) => {
            this.setState({ account: account[0] })
        });
    }
    onSuccess = async (e) => {
        try {
            let data = await JSON.parse(e.data);
            alert(data[0]);

            this.setState({ account1: data[0], account2: this.state.account.number, valTransfer: data[1] });

            await TransactionService.getByNumber(this.state.account1, (value) => {
                this.setState({ rode1: value.rode })
            })

            await TransactionService.getByNumber(this.state.account2, (value) => {
                this.setState({ rode2: value.rode })
            })

            this.setState({ isSubmit: true })

        } catch (error) {
            alert("!Opps!Alparecer no es un QR de todo 1")
        }
    }

    async onTransfering() {
        try {
            await TransactionService.updateAccount(this.state.account1, this.state.rode1 + this.state.valTransfer);
            await TransactionService.updateAccount(this.state.account2, this.state.rode2 - this.state.valTransfer);
            alert('Operación Exitosa');
            this.navigation.navigate('Home');
        } catch (error) {
            alert('Operación Fallida');
        }
    }

    render() {
        return (
            <View style={(this.state.isSubmit) ? styles.container : { flex: 1 }}>
                {(this.state.isSubmit) ?
                    <View style={styles.medium}>
                        <FormLabel>Producto Destino</FormLabel>
                        <FormInput
                            inputStyle={styles.input}
                            placeholder='Producto Destino'
                            value={this.state.account1}
                            onChangeText={(account1) => this.setState({ account1 })}
                        />
                        <FormLabel>Valor</FormLabel>
                        <FormInput
                            inputStyle={styles.input}
                            placeholder='Valor'
                            value={`${this.state.valTransfer}`}
                            onChangeText={(valTransfer) => this.setState({ valTransfer })}
                        />
                        <View style={styles.bottom}>
                            <Button borderRadius={5} buttonStyle={styles.button} textStyle={styles.textButton} onPress={() => this.onTransfering()}
                                title='Listo'
                            />
                        </View>
                    </View> :
                    <QRCodeScanner
                        fadeIn={false}
                        showMarker={true}
                        cameraStyle={{ width: '100%', height: '100%' }}
                        onRead={this.onSuccess}
                    />
                }
            </View>
        );
    }
}

export default QRScanner;