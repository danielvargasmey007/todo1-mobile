import { Dimensions } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window');

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
    medium: {
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: '3@vs',
        paddingBottom: '-3@vs',
        marginTop: '5@vs',
        width: width * 0.9,
        fontSize: 16,
        color: '#727272',
        borderColor: '#08104D',
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
});

export default styles;