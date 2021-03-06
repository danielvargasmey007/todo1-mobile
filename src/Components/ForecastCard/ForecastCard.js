import React, { Component } from 'react';
import { FlatList, View, Image, ScrollView, Alert } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import styles from './ForecastCard.style';
import Geolocation from '@react-native-community/geolocation';

class ForecastCard extends Component {

    state = { latitude: 0, longitude: 0, forecast: [], error: '' };

    constructor(props) {
        super(props);
        this.getLocation = this.getLocation.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        // obtener la ubicacion del usuario
        this.getLocation();
    }

    async getLocation() {
        try {
            await Geolocation.getCurrentPosition(
                info => {
                    this.setState({ latitude: info.coords.latitude, longitude: info.coords.longitude },
                        () => this.getWeather()
                    )
                },
                error => Alert.alert('Todo 1 Informa', 'Por favor verifica que tengas activada tu ubicación.',
                    [{ text: 'OK' },], { cancelable: true })
            );
        } catch (error) {
            Alert.alert('Todo 1 Informa', 'Por favor verifica que tengas activada tu ubicación.', [{ text: 'OK' },], { cancelable: true });
        }
    }

    getWeather() {
        try {
            // Construct the API url to call
            let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=152ff719a66c7b0f8df6576c4755dc0b`;

            // Call the API, and set the state of the weather forecast
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ forecast: data });
                })
        } catch (error) {
            Alert.alert('Todo 1 Informa', 'Por favor verifica que tengas activada tu ubicación.',
                [{ text: 'OK' },], { cancelable: true });
        }
    }

    renderItem({ item }) {
        let time;

        // Create a new date from the passed date time
        var date = new Date(item.dt * 1000);

        // Hours part from the timestamp
        var hours = date.getHours();

        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        time = hours + ':' + minutes.substr(-2);

        return (
            <Card containerStyle={styles.card}>
                <Text style={styles.notes}>{this.state.forecast.city.name}</Text>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png" }} />
                    <Text style={styles.time}>{time}</Text>
                </View>

                <Divider style={styles.cardDivider} />

                <View style={styles.cardContainer}>
                    <Text style={styles.notes}>{item.weather[0].description}</Text>
                    <Text style={styles.notes}>{Math.round(item.main.temp * 10) / 10}&#8451;</Text>
                </View>
            </Card>
        );
    }


    render() {
        return (
            <ScrollView>
                <Text style={styles.text}>Nos preocupamos por ti, por eso aquí te dejamos el pronostico del clima:</Text>
                <FlatList data={this.state.forecast.list} keyExtractor={item => item.dt_txt} renderItem={this.renderItem} />
            </ScrollView>
        );
    }
}

export default ForecastCard;