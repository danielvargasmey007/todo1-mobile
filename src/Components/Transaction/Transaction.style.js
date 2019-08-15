import { Dimensions } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
const { height } = Dimensions.get('window');

const styles = ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    bottom: {
        height: height * 0.45,
        marginTop: '15@ms',
        marginBottom: 0
    },
    button: {
        backgroundColor: '#08104D',
        height: '55@vs',
        paddingVertical: '1.5@vs',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 21
    },
    containerButtom: {
        marginTop: 0,
        marginBottom: 0,
    },
    containerButtomTop: {
        marginVertical: '15@vs'
    },
    text: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: '20@vs',
        color: '#08104D',
        marginBottom: 0,
    },
});

export default styles;