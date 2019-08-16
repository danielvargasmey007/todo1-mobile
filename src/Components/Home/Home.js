import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import TopHeader from '../Common/Header/Header';
import styles from './Home.style';
import ForecastCard from '../ForecastCard/ForecastCard';
import Product from '../Product/Product';
import HomeService from '../../services/HomeService';
import { getUid } from '../../services/SecurityService';

class Home extends Component {

    state = { account: null };

    constructor(props) {
        super(props);
        this.fetchAccounts = this.fetchAccounts.bind(this);
    }

    componentWillMount() {
        this.fetchAccounts();
    }

    async fetchAccounts() {
        let uid = await getUid();

        HomeService.getAccountByUid(uid, (account) => {
            this.setState({ accounts: account })
        });
    }

    render() {
        return (
            <View>
                <TopHeader />
                <View style={styles.top}>
                    <ForecastCard />
                </View>
                <View style={styles.medium}>
                    <Text style={styles.mediumTitle}>Mis productos</Text>
                    <Product accounts={this.state.accounts} />
                </View>
                <View style={styles.bottom}></View>
            </View>
        );
    }
}

export default Home;