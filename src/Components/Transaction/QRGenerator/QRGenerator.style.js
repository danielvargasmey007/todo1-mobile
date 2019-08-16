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
    }
});

export default styles