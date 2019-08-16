import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { Header } from 'react-native-elements';
import headerStyles from './Header.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopHeader = (props) => {

  const { header, imageR, hitSlop } = headerStyles;

  return (
    <Header
      backgroundColor='#08104D'
      outerContainerStyles={header}
      leftComponent={
        <TouchableHighlight underlayColor='transparent' hitSlop={hitSlop} onPress={() => props.navigation.navigate('Login')}>
          <MaterialCommunityIcons size={30} name="exit-run" color="white" />
        </TouchableHighlight>}
      centerComponent={<Image source={{ uri: 'https://blog.todo1services.com/hubfs/Todo_February2019%20/images/t1-newlogo-white.png' }} style={imageR} />} />
  );
}


export default TopHeader;
