import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/constants';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 47,
        color: COLORS.black,
    },
    signUpText: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 59.44,
        color: COLORS.heading,
        marginBottom: "10%"
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.inputFieldBorderColor,
    },
    input: {
        width: "95%",
        color: COLORS.black,
    },
    errorMsg: {
        color: "red",
        alignSelf: 'flex-start',
    },
    span: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 14.4,
        color: COLORS.bgColor,
    },
    text: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 14.4,
        color: COLORS.heading,
        marginVertical: 20,
        alignSelf: "flex-start",
        marginStart: 30,
    },
    button: {
        backgroundColor: COLORS.bgColor,
        height: 50,
        width: 320,
        borderRadius: 50,
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
    textAccount: {
        fontFamily: "Avenir LT Std",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 17,
        letterSpacing: 0,
        color: COLORS.black,
    },
    spanAccount: {
        fontFamily: "Avenir LT Std",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 16.8,
        letterSpacing: 0,
        color: COLORS.textColorTerms,
    },
    footer: {
        position: "absolute",
        bottom: 10,
        alignItems: 'center',
        color: COLORS.black,
        fontFamily: "Avenir LT Std",
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        gap: 5,
    },
    checkboxErrorMsg: {
        color: 'red',
        alignSelf: 'flex-start',
    },
    agreeText: {
        marginTop: 6,
        color: COLORS.black,
    },

})


export default styles;