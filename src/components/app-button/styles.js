import { StyleSheet } from 'react-native';
import COLORS from "../../../utils/constants";


const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.bgColor,
        height: 50,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    buttonText: {
        fontFamily: 'Avenir LT Std',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.text,
    },

})

export default styles