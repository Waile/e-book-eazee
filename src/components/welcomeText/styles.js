import { StyleSheet } from 'react-native';
import COLORS from "../../../utils/constants";


const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 47,
        color: COLORS.black,
    },
    buttonText: {
        fontFamily: 'Avenir LT Std',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.text,
    },
    screenName: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 26.75,
        color: COLORS.black,
    },

})

export default styles