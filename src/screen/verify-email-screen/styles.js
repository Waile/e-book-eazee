import { StyleSheet } from "react-native"
import COLORS from "../../../utils/constants"


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
    verifyHeading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 41,
        color: COLORS.black,
        marginVertical: "15%"
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.inputFieldBorderColor,
        fontFamily: "Avenir LT Std",
    },
    input: {
        width: "84%",
        padding: "1%",
        color:COLORS.black,
    },
    errorMsg: {
        color: 'red',
        alignSelf: 'flex-start',
    },
})
export default styles