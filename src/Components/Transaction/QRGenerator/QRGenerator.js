import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import styles from './QRGenerator.style';
import { Button, FormInput } from 'react-native-elements';
import HomeService from '../../../services/HomeService';
import { getUid } from '../../../services/SecurityService';
import RNPickerSelect from 'react-native-picker-select';

const { width } = Dimensions.get('window');

class QRGenerator extends Component {
    state = {
        body: '12345',
        rode: 0,
        account: '',
        currentAccount: null,
        accountPiker: [],
        isSubmit: false,
        currency: true
    };

    constructor(props) {
        super(props);
        this.generator = this.generator.bind(this);
        this.fetchAccounts = this.fetchAccounts.bind(this);
    }

    generator() {
        if (this.state.currentAccount) {
            let body = JSON.stringify([
                this.state.currentAccount,
                (!this.state.currency) ? this.state.rode : (this.state.rode) / (0.00029)]
            );
            this.setState({ body, isSubmit: true })
        } else {
            alert('Por favor verifica tus datos.')
        }
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

    render() {
        return (
            <View style={(this.state.isSubmit) ? styles.container : {}}>
                {(!this.state.isSubmit) ?
                    <View style={styles.medium}>
                        <RNPickerSelect
                            placeholder={{ label: `Producto`, value: null }}
                            style={{ width: '80%' }}
                            onValueChange={(value) => this.setState({ currentAccount: value })}
                            items={this.state.accountPiker}
                            useNativeAndroidPickerStyle={false}
                        />
                        <RNPickerSelect
                            placeholder={{ label: `Moneda`, value: null }}
                            style={{ width: '80%' }}
                            onValueChange={(value) => this.setState({ currency: value })}
                            items={[{ label: `Peso Colombiano`, value: false },
                            { label: `Dolar`, value: true }]}
                            useNativeAndroidPickerStyle={false}
                        />
                        <FormInput
                            inputStyle={styles.input}
                            placeholder='Valor'
                            value={this.state.rode}
                            onChangeText={(rode) => this.setState({ rode })}
                        />
                        <View style={styles.bottom}>
                            <Button borderRadius={5} buttonStyle={styles.button} textStyle={styles.textButton} onPress={() => this.generator()}
                                title='Listo'
                            />
                        </View>
                    </View> :
                    <QRCode
                        size={width * 0.88}
                        value={this.state.body}
                    />
                }
            </View>
        );
    };
}

export default QRGenerator;