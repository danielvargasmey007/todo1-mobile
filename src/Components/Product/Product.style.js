import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#08104D',
        padding: '10@ms',
        marginVertical: '18@ms',
        marginHorizontal: '12@ms',
    },
    time: {
        fontSize: '16@ms',
        color: '#08104D',
        fontWeight: 'bold'
    },
    notes: {
        fontSize: '13@ms',
        color: '#08104D',
        textTransform: 'capitalize'
    },
    cardDivider: {
        backgroundColor: '#08104D',
        height: 3,
        marginVertical: '10@vs'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default styles;
