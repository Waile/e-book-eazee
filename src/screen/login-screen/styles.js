import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/constants';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.loginScreenBackground,
    },
    scrollView: {
        padding: 15,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical:40

    },
    socialLoginBtnContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.inputFieldBorderColor,
        color: COLORS.inputFieldTextColor,
        borderColor: COLORS.inputFieldBorderColor,
        fontFamily: "Avenir LT Std",
        paddingHorizontal: 5,
    },
    loginText: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 59.44,
        color: COLORS.heading,
        marginBottom: "12%"
    },
    input: {
        width: '95%',
        color:COLORS.black,
    },
    errorMsg: {
        color: 'red',
        alignSelf: 'flex-start',
    },
    resetPassword: {
        marginTop: 15,
        lineHeight: 14.4,
        fontFamily: "Avenir LT Std",
        color: COLORS.heading,
    },
    signupText: {
        color: COLORS.textColorTerms,
        lineHeight: 16.8,
    },
    resetText: {
        color: COLORS.textColorTerms,
        lineHeight: 16.8,
    },
    accountText: {
        fontFamily: "Avenir LT Std",
        color: COLORS.heading,
        lineHeight: 16.8,
    },
});

export default styles;
