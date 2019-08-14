import { Dimensions } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window');


const styles = ScaledSheet.create({
    top: {
        height: height * 0.33,
    },
    medium: {
        height: height * 0.33,
        backgroundColor: 'red'
    },
    bottom: {
        height: height * 0.33,
        backgroundColor: 'green'
    },
});

export default styles;
