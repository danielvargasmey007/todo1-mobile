import { Dimensions } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window');


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d8d8d8'
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
    medium: {
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
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