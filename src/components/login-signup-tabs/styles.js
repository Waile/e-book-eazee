import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/constants';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.white1,
    },
    tabContainer: {
        flex: 0.13,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    tab: {
        height: 35,
        marginHorizontal: 10,
        alignSelf: "flex-end"
    },
    activeTab: {
        borderBottomColor: COLORS.pink,
        borderBottomWidth: 2,
    },
    activeTabText: {
        color: "#E77579",
    },
    tabText: {
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
        color: "#191D28",
        fontFamily: "Avenir LT Std",
    },
    signUpText: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 59.44,
        color: COLORS.heading,
    },
})

export default styles