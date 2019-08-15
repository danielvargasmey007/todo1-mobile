import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import TopHeader from '../Common/Header/Header';
import styles from './Home.style';
import ForecastCard from '../ForecastCard/ForecastCard';
import Product from '../Product/Product';

class Home extends Component {

    state = {}

    constructor(props) {
        super(props);
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
                    <Product />
                </View>
                <View style={styles.bottom}></View>
            </View>
        );
    }
}

export default Home;