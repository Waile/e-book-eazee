import {StyleSheet} from 'react-native'
import COLORS from '../../../utils/constants'
import FONTS from '../../../utils/fontFamily'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:10,
        backgroundColor:COLORS.white1,
    },
    contentContainer:{
        flex:1,
        marginTop:"2%",
    },
    allCategoryHeading:{
        color:COLORS.black2,
        fontFamily:FONTS.heading,
        fontSize:23,
        fontWeight:500,
        lineHeight:34.18,
        marginVertical:10,
    },
    categoriesList:{
        flex:1,
        marginVertical:10,
    },
    flatListWrapper: {
        flexDirection: "row",
    },
    listContainer: {
        height: 30,
        alignItems: 'center',
    },

    // BOOKS 
    booksContent:{
        flex: 1,
        marginVertical:10,
        
    },
    noBookError:{
        color:COLORS.black,
        flex:1,

    },
    bookErrorContainer:{
        flex:1,
        alignItems:"center"
    },
    bookContainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        gap:10,
        columnGap:6,
    },
    singleBookContainer:{
        marginTop:5,
    },
    bookImage:{
        height:119,
    },
    bookName:{
        fontFamily:FONTS.text,
        fontWeight:400,
        fontSize:9.5,
        color:COLORS.black3,
        height:25,
        width:80,
        marginBottom:10,
    },
    bookStatus:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    bookStatusText:{
        fontFamily:FONTS.text,
        fontWeight:400,
        color:COLORS.grey3,
        fontSize:10,
    }

})
export default styles