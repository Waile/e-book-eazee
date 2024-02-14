import {StyleSheet} from 'react-native'
import FONTS from '../../../utils/fontFamily'
import COLORS from '../../../utils/constants'
const styles = StyleSheet.create({
    menuContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    menuLogo:{
        width:16,
        height:11.43,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        height:30,
    },
    dashboardHeading:{
        justifyContent:"center",
        alignItems:"center",
    },
    dashboardText:{
        fontFamily:FONTS.text,
        fontWeight:400,
        fontSize:16,
        lineHeight:19.2,
        color:COLORS.black,
    },
    headerLogos:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    logos:{
        marginHorizontal:5
    },
    countryLogo:{
        width:20.36,
        height:19,
    },
    userLogo:{
        width:19,
        height:19,
    },
})
export default styles