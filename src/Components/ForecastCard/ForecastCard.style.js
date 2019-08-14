import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    card: {
        backgroundColor: '#08104D',
        borderWidth: 0,
        borderRadius: 20,
        padding: '10@ms',
        marginVertical: '18@ms',
        marginHorizontal: '12@ms',
    },
    time: {
        fontSize: '30@vs',
        color: '#fff'
    },
    notes: {
        fontSize: '20@vs',
        color: '#fff',
        textTransform: 'capitalize'
    },
    text: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: '20@vs',
        color: '#08104D',
        marginBottom: 0,
    },
    image: {
        width: '50@ms',
        height: '50@ms'
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardDivider: {
        backgroundColor: '#dfe6e9',
        marginVertical: '10@vs'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default styles;
