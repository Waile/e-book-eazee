import { StyleSheet } from "react-native";
import COLORS from "../../../utils/constants.js";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "5%"
    },
    allDoneHeading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 44,
        color: COLORS.black,
        marginVertical: "8%"
    },
    allDoneText: {
        textAlign: "center",
        color: COLORS.black,
        fontFamily: "Avenir LT Std",
        marginBottom: "8%"
    },

})

export default styles