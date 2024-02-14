import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/constants';

const styles = StyleSheet.create({
    activeTab: {
        backgroundColor: COLORS.pink,
        borderColor: COLORS.pink,
    },
    activeTabText: {
        color: COLORS.white
    },
    listItem: {
        flex:1,
        justifyContent: "space-around",
        alignItems: 'center',
        borderColor: COLORS.black,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: COLORS.black,
        
    },
    listItemText: {
        lineHeight: 13.2,
        fontFamily: "Avenir LT Std",
        color: COLORS.black,
        fontWeight: 400,
        fontSize: 11,
    },

})

export default styles;