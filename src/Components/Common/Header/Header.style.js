import { ScaledSheet } from 'react-native-size-matters';

const headerStyles = ScaledSheet.create({
  imageR: {
    marginVertical: 0,
    marginLeft: 0,
    width: '90@ms',
    height: '40@ms',
  },
  header: {
    height: 60
  },
  hitSlop: {
    top: 25,
    right: 30,
    bottom: 25,
    left: 30
  },
});

export default headerStyles;
