import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import styles from './Product.style';
import HomeService from '../../services/HomeService';
import { getUid } from '../../services/SecurityService';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { account: null };
        this.fetchAccounts = this.fetchAccounts.bind(this);
    }

    componentDidMount() {
        this.fetchAccounts();
    }

    async fetchAccounts() {
        let uid = await getUid();

        HomeService.getAccount(uid, (val) => {
            this.setState({ account: val.account })
        });
    }

    render() {
        return (
            <View style={(!this.state.account) ? styles.loadinView : {}}>
                {(!this.state.account) ?
                    <ActivityIndicator size="large" color="#08104D" />
                    :
                    <Card containerStyle={styles.card}>
                        <View style={styles.imageContainer}>
                            <Text style={styles.time}>{this.state.account.name}</Text>
                            <Text style={styles.notes}>*{this.state.account.number.slice(-4)}</Text>
                        </View>
                        <Divider style={styles.cardDivider} />
                        <Text style={styles.notes}>$ {String(parseFloat(this.state.account.rode)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                    </Card>
                }
            </View>
        );
    }
}

export default Product;