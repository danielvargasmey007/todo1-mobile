import React, { Component } from 'react';
import { FlatList, View, Image, ScrollView } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import styles from './Product.style';

class Product extends Component {

    state = { data: [{ number: '12345', name: 'Ahorros Todo1', type: '1', rode: 1000000 }, { number: '456789', name: 'Tajeta MasterCard', type: '2', rode: 500000 }, { number: '963258', name: 'Ahorro Familiar', type: '1', rode: 3000000 }] };

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }



    renderItem({ item }) {
        return (
            <Card containerStyle={styles.card}>
                <View style={styles.imageContainer}>
                    <Text style={styles.time}>{item.name}</Text>
                    <Text style={styles.notes}>*{item.number.slice(-4)}</Text>
                </View>
                <Divider style={styles.cardDivider} />
                <Text style={styles.notes}>$ {String(parseFloat(item.rode)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </Card>
        );
    }


    render() {
        return (
            <FlatList data={this.state.data} keyExtractor={item => item.number} renderItem={this.renderItem} />
        );
    }
}

export default Product;