import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import styles from './App.styles';
const { width } = Dimensions.get('window');

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#08104D" barStyle="light-content" />
        <OuletRouter />
      </View>
    );
  };
}

/* Se crean las diferentes rutas de la aplicación */
const Tabs = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Tranferencias: { screen: Login },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Tranferencias') {
          iconName = 'md-swap';
        }
        return <Ionicons name={iconName} color='white' size={25} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#08104D'
      }
    },
  }
);

const Switch = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Dashboard: {
    screen: Tabs
  }
});



const OuletRouter = createAppContainer(Switch);

export default App;
