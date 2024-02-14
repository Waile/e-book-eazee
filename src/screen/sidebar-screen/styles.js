import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/constants';
import FONTS from '../../../utils/fontFamily';

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.pink,
    },
    contentContainer:{
        flex:1,
    },
    cross:{
        flex:1,
        marginVertical:20,
        alignSelf:"flex-end",
        marginHorizontal:25,
    },
    buttonContainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        marginVertical:60
    },
    buttonStyle: {
        backgroundColor: "#FFFFFF",
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        width:"70%",
    },
    buttonText: {
        fontFamily: FONTS.text,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 20,
        color: "#E77579",
    },
    footer:{
        color:COLORS.white,
    },
    userContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"50%",
    },
    imageStyle:{
        width:150,
        height:150,
        borderRadius:75,
    },
    userName:{
        fontFamily: FONTS.heading,
        color:COLORS.white,
        fontWeight:500,
        fontSize:26,
        marginVertical:15,
    },
    userEmail:{
        fontFamily: FONTS.text,
        color:COLORS.white,
        fontWeight:400,
        lineHeight:20,
        fontSize:16,
    },
    footerText:{
        color:COLORS.white,
    },
})
export default styles