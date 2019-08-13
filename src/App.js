import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { createAppContainer, createDrawerNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from './Login/Login';
import Home from './Home/Home';
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
const stackRoutes = createStackNavigator({
  Home: Home
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const Drawers = createDrawerNavigator({
  Dashboard: {
    screen: stackRoutes
  },
},
  {
    drawerWidth: width * 0.7,
  });

const Switch = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Dashboard: {
    screen: Drawers
  }
});

const OuletRouter = createAppContainer(Switch);

export default App;
