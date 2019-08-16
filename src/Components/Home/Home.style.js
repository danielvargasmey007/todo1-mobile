import { Dimensions } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
const { height } = Dimensions.get('window');


const styles = ScaledSheet.create({
    top: {
        height: height * 0.33,
    },
    medium: {
        height: height * 0.46,
        borderTopWidth: 3,
        borderTopColor: '#08104D',
        marginBottom: '10@ms',
    },
    bottom: {
        height: height * 0.21,
    },
    mediumTitle: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: '22@ms',
        color: '#08104D',
    }
});

export default styles;
