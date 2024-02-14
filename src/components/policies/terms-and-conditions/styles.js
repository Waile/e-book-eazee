import { StyleSheet } from "react-native"
import COLORS from "../../../../utils/constants"


const styles = StyleSheet.create({
    headingTop: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 37,
        color: COLORS.black,
        marginBottom: 10,
        marginTop: 30
    },
    heading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 37,
        color: COLORS.black,
        marginBottom: 10
    },
    textContent: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        textAlign: 'justify',
        marginBottom: 10,
    },
    textContentEnd: {
        marginBottom: 70,
    },
})

export default styles