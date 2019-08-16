import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import TransactionService from '../../../services/TransactionService';
import HomeService from '../../../services/HomeService';
import { getUid } from '../../../services/SecurityService';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import { View, Alert } from 'react-native';
import { styles, pickerSelectStyles } from './QRScanner.style';
import RNPickerSelect from 'react-native-picker-select';

class QRScanner extends Component {
    state = {
        account: null,
        account1: '',
        rode1: 0,
        rode2: 0,
        valTransfer: 0,
        currentAccount: null,
        accountPiker: [],
        isSubmit: false
    };

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
        this.onTransfering = this.onTransfering.bind(this);
        this.fetchAccounts = this.fetchAccounts.bind(this);
        this.getRodeCurrentAccount = this.getRodeCurrentAccount.bind(this);
    }

    componentWillMount() {
        this.fetchAccounts();
    }

    async fetchAccounts() {
        let uid = await getUid();
        HomeService.getAccountByUid(uid, (account) => {
            this.setState({ account: account })
        });

        let response = []
        this.state.account.forEach(function (data) {
            response.push({ label: `${data.name}`, value: data.number });
        });
        this.setState({ accountPiker: response })
    }

    async getRodeCurrentAccount() {
        await TransactionService.getByNumber(this.state.currentAccount, (value) => {
            this.setState({ rode2: value.rode })
        })
    }
    onSuccess = async (e) => {
        try {
            let data = await JSON.parse(e.data);
            this.setState({ account1: data[0], valTransfer: data[1] });

            await TransactionService.getByNumber(this.state.account1, (value) => {
                this.setState({ rode1: value.rode })
            })
            this.setState({ isSubmit: true })
        } catch (error) {
            Alert.alert('!Opps!', 'Alparecer no es un QR de todo 1', [{ text: 'OK' },], { cancelable: true });
        }
    }

    async onTransfering() {
        try {
            if (this.state.currentAccount) {
                if ((this.state.rode2 && this.state.valTransfer) && (this.state.rode2 < this.state.valTransfer)) {
                    Alert.alert('!Opps!', 'no tienes lo suficiente.', [{ text: 'OK' },], { cancelable: true });
                } else {
                    await TransactionService.updateAccount(this.state.account1, (this.state.rode1 * 1) + (this.state.valTransfer * 1));
                    await TransactionService.updateAccount(this.state.currentAccount, this.state.rode2 - this.state.valTransfer);
                    Alert.alert('Hola!', 'Operación Exitosa.', [{ text: 'OK' },], { cancelable: true });
                    this.navigation.navigate('Home');
                }
            } else {
                Alert.alert('Hola!', 'Por favor verifica tu información.', [{ text: 'OK' },], { cancelable: true });
            }
        } catch (error) {
            Alert.alert('Hola!', 'Operación Fallida', [{ text: 'OK' },], { cancelable: true });
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
                        <RNPickerSelect
                            placeholder={{ label: `Producto a debitar`, value: null }}
                            style={pickerSelectStyles}
                            onValueChange={(value) => this.setState({ currentAccount: value }, () => this.getRodeCurrentAccount())}
                            items={this.state.accountPiker}
                            useNativeAndroidPickerStyle={false}
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