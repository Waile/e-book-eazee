import { StyleSheet } from "react-native"
import FONTS from "../../../utils/fontFamily"
import COLORS from "../../../utils/constants"


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

    // SEARCH BAR STYLING 

    searchBar:{
        height:36,
        marginVertical:20,
        backgroundColor:COLORS.white,
    },
    searchBarContent:{
        flex:1,
        flexDirection:"row",
        marginLeft:10,
        alignItems:"center",
    },
    search:{
        width:"90%",
        height:20,
        justifyContent:"center", 
    },
    searchText:{
        fontSize:10,
        fontFamily:FONTS.text,
        marginHorizontal:10,
        paddingVertical:0,
        color:COLORS.black,
    },

    // SLIDER

    slider:{
        flex:1,
        height:155,
        backgroundColor:COLORS.grey,
        borderRadius:5,
        marginVertical:10,
    },

    // SECTION 

    sections:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        height:30,
    },
    sectionContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        marginHorizontal:5

    },
    sectionText:{
        color:COLORS.grey2,
        fontWeight:300,
        fontSize:12,
        lineHeight:14.4,
        fontFamily:FONTS.text,
    },
    sectionContainerActive:{
        borderBottomColor:COLORS.pink,
        borderWidth:1,
    },
    sectionTextActive:{
        color:COLORS.pink2,
    },

    //CATEGORIES

    categoriesContainer:{
        flex:1,
        marginVertical:10,
    },
    categoriesHeading:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    categoriesText:{
        color:COLORS.black2,
        fontFamily:FONTS.heading,
        fontSize:20,
        fontWeight:500,
    },
    viewMoreContainer:{
        justifyContent:"center",
        marginHorizontal:5,
        flexDirection:"row",
        alignItems:"center",
    },
    viewMore:{
        color:COLORS.pink,
        fontFamily:FONTS.text,
        fontWeight:400,
        fontSize:12,
        lineHeight:14.4,
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

    // BOOKS CONTAINER 
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
        justifyContent: 'flex-start',
        width: '100%',
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

