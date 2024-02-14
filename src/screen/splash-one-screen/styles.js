import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
    },
    textContainer: {
        backgroundColor: "#E77579",
        height: height / 2,
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    heading: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 47,
        color: '#FFFFFF',
    },
    text: {
        fontFamily: 'Accent Graphic W00 Medium',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 20,
        color: "#FFFFFF",
        marginTop: "10%",
        textAlign: 'center',
    },
    buttonStyle: {
        backgroundColor: "#FFFFFF",
        height: 44,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%"
    },
    buttonText: {
        fontFamily: 'Avenir LT Std',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19.2,
        color: "#E77579",
    },
})

export default styles;