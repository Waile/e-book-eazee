import { StyleSheet } from 'react-native'
import COLORS from '../../../utils/constants'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    scrollView: {
        padding: "5%",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "5%"
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resetHeading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 41,
        color: COLORS.heading,
        marginTop: "20 %",
        marginBottom: "5%"

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.inputFieldBorderColor,
    },
    errorMsg: {
        color: "red",
        alignSelf: 'flex-start',
    },
    input: {
        width: "95%",
        color:COLORS.black,
    },
})

export default styles