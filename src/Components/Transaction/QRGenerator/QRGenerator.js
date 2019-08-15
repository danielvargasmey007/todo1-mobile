import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import styles from './QRGenerator.style';
const { width } = Dimensions.get('window');

class QRGenerator extends Component {
    state = {
        text: 'http://facebook.github.io/react-native/',
    };

    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    size={width * 0.88}
                    value={this.state.text}
                    logoSize={width * 0.25}
                    logo={require('../../../../assets/image/todo1-logo.png')}
                />
            </View>
        );
    };
}

export default QRGenerator;