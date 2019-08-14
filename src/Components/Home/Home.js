import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TopHeader from '../Common/Header/Header';
import styles from './Home.style';
import ForecastCard from '../ForecastCard/ForecastCard';

class Home extends Component {
    render() {
        return (
            <View>
                <TopHeader headerText="Mis Cuentas" />
                <View style={styles.top}>
                    <ForecastCard />
                </View>
                <View style={styles.medium}>
                </View>
                <View style={styles.bottom}></View>
            </View>
        );
    }
}

export default Home;