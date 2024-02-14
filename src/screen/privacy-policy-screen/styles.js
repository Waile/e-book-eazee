import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/constants';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    flatListWrapper: {
        flex: 0.4,
        alignItems: 'flex-end',
        flexDirection: "row",
        paddingBottom: 12
    },
    listContainer: {
        height: 30,
        alignItems: 'center',
        paddingHorizontal: 5
    },
    contentContainer: {
        flex: 2,
        paddingHorizontal: 10,
    },
    scrollContainer: {
    },

    heading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 37,
        color: COLORS.black,
        marginVertical: 30
    },
    textContent: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        textAlign: 'justify',
    },
});
export default styles;
