import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import styles from './QRGenerator.style';
import { Button, FormInput } from 'react-native-elements';
import HomeService from '../../../services/HomeService';
import { getUid } from '../../../services/SecurityService';

const { width } = Dimensions.get('window');

class QRGenerator extends Component {
    state = {
        body: '',
        rode: 0,
        account: '',
        currentAccount: null,
        isSubmit: false
    };

    constructor(props) {
        super(props);
        this.generator = this.generator.bind(this);
        this.fetchAccounts = this.fetchAccounts.bind(this);
    }

    generator() {
        let body = JSON.stringify([
            this.state.account.number,
            this.state.rode]
        );


        this.setState({ body })
    }

    componentWillMount() {
        this.fetchAccounts();
    }

    async fetchAccounts() {
        let uid = await getUid();
        HomeService.getAccountByUid(uid, (account) => {
            this.setState({ account: account[0] }, () => this.generator())
        });
    }

    render() {
        return (
            <View style={(this.state.isSubmit) ? styles.container : {}}>
                {(!this.state.isSubmit) ?
                    <View style={styles.medium}>
                        <FormInput
                            inputStyle={styles.input}
                            placeholder='Valor'
                            value={this.state.rode}
                            onChangeText={(rode) => this.setState({ rode })}
                        />
                        <View style={styles.bottom}>
                            <Button borderRadius={5} buttonStyle={styles.button} textStyle={styles.textButton} onPress={() => this.setState({ isSubmit: true }, () => this.generator())}
                                title='Listo'
                            />
                        </View>
                    </View> :
                    <QRCode
                        size={width * 0.88}
                        value={this.state.body}
                        logoSize={width * 0.25}
                        logo={require('../../../../assets/image/todo1-logo.png')}
                    />
                }
            </View>
        );
    };
}

export default QRGenerator;