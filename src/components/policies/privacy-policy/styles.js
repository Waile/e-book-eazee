import { StyleSheet } from "react-native"
import COLORS from "../../../../utils/constants"


const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 37,
        color: COLORS.black,
        marginVertical: 20
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
})

export default styles