import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import styles from './Product.style';

class Product extends Component {

    state = { account: null };

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({ account: props.accounts });
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
            <View>
                {(!this.state.account) ? null :
                    <FlatList data={this.state.account} keyExtractor={item => item.number} renderItem={this.renderItem} />
                }
            </View>

        );
    }
}

export default Product;