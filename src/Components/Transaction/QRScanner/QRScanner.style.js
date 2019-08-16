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
        width: width * 0.85,
        paddingVertical: '1.5@vs',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 21
    },
    inputPicker: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#08104D',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
    containerAlter: {
        flex: 1
    },
    camera: {
        width: '100%',
        height: '100%'
    }

});

const pickerSelectStyles = ScaledSheet.create({
    inputIOS: {
        fontSize: 16,
        marginVertical: 5,
        borderWidth: 0.5,
        width: width * 0.9,
        borderRadius: 8,
        borderColor: '#08104D',
        color: 'black',
        paddingRight: 30
    },
    inputAndroid: {
        fontSize: 16,
        marginVertical: 5,
        borderWidth: 0.5,
        width: width * 0.9,
        borderRadius: 8,
        borderColor: '#08104D',
        color: 'black',
        paddingRight: 30
    },
});

module.exports = { styles, pickerSelectStyles };