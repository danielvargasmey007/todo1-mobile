import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './QRScanner.style'
import QRCodeScanner from 'react-native-qrcode-scanner';

class QRScanner extends Component {
    onSuccess = (e) => {
        alert(e.data)
    }

    render() {
        return (
            <QRCodeScanner
                reactivate={true}
                fadeIn={false}
                showMarker={true}
                cameraStyle={{ width: '100%', height: '100%' }}
                onRead={this.onSuccess}
            />
        );
    }
}

export default QRScanner;