import React from 'react';
import { Image } from 'react-native';
import { Header } from 'react-native-elements';
import headerStyles from './Header.style';

const TopHeader = () => {

  const { header, imageR } = headerStyles;

  return (
    <Header
      backgroundColor='#08104D'
      outerContainerStyles={header}
      centerComponent={<Image source={{ uri: 'https://blog.todo1services.com/hubfs/Todo_February2019%20/images/t1-newlogo-white.png' }} style={imageR} />} />
  );
}


export default TopHeader;
