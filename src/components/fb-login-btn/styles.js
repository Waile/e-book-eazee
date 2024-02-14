import { StyleSheet } from 'react-native';
import COLORS from "../../../utils/constants";


const styles = StyleSheet.create({
    socialLoginButton: {
        width: 140,
        height: 43,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        margin: 10,
    },
    socialLoginText: {
        fontFamily: "Avenir LT Std",
        lineHeight: 16.8,
        fontWeight: 400,
        fontSize: 14,
        color: COLORS.black,
    },
})
export default styles