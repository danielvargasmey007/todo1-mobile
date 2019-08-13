import { Dimensions, Platform } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window');

const styles = ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    top: {
        marginTop: '5@vs',
        height: height * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    medium: {
        height: height * 0.3
    },
    bottom: {
        height: height * 0.45,
        marginTop: '15@ms',
        marginBottom: 0
    },
    containerI: {
        height: 0,
        margin: 0,
        alignItems: 'flex-end'
    },
    input: {
        borderBottomWidth: '3@vs',
        paddingBottom: '-3@vs',
        marginTop: '5@vs',
        width: width * 0.9,
        fontSize: 16,
        color: '#727272'
    },
    inputBar: {
        borderColor: '#08104D',
    },
    inputBarBad: {
        borderColor: 'red',
    },
    Image: {
        width: '250@ms',
        height: '100@ms'
    },
    on: {
        display: 'flex'
    },
    off: {
        display: 'none'
    },
    TextCenter: {
        color: '#08104D',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '4%',
        marginTop: '15@vs',
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
});

export default styles;