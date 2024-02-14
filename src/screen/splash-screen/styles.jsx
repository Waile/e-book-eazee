import { StyleSheet } from "react-native";
import COLORS from "../../../utils/constants.js";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"

    },
    text: {
        fontSize: 40,
        fontWeight: 500,
        color: COLORS.text,
        fontFamily: 'Accent Graphic W00 Medium',
        lineHeight: 47,
        marginTop: "5%"
    },
    progressContainer: {
        position: "absolute",
        bottom: 50,
    },
    progressPercent: {
        color: '#FFFFFF',
        alignSelf: "flex-end",
        fontFamily: 'Accent Graphic W00 Medium',
        marginBottom: "1%"
    }

})

export default styles;