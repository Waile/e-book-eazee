import {StyleSheet} from 'react-native';
import COLORS from '../../../utils/constants';
import FONTS from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white1,
  },
  contentContainer: {
    flex: 1,
    marginTop: '2%',
  },
  bookImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
  bookImage:{
    height:229,
    width:162,
  },
  bookDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookName: {
    fontWeight: 500,
    fontSize: 20,
    fontFamily: FONTS.heading,
    lineHeight: 27,
    color: COLORS.black,
  },
  bookNameContainer: {
    width: '50%',
  },
  priceContainer: {
    paddingHorizontal: 10,
  },
  priceText: {
    fontFamily: FONTS.text,
    fontWeight: 400,
    fontSize: 16,
    color: COLORS.black,
  },
  authorName: {
    color: COLORS.pink,
    fontFamily: FONTS.text,
    fontWeight: 400,
    fontSize: 14,
    marginVertical: 7,
  },
  ratingsContainer: {
    flex: 1,
    alignItems:"flex-start",
    marginVertical:"7%",
    backgroundColor:COLORS.white1,
  },
  ratingCount:{
   color:COLORS.black,
   fontWeight:"400",
   fontFamily:FONTS.text,
   fontSize:14,
   position:"absolute",
   left:70,
   bottom:0,
  },
  text: {
    color: COLORS.black,
  },
  lisceneText: {
    fontFamily: FONTS.text,
    fontWeight: 400,
    fontSize: 14,
    color: COLORS.black,
  },
  dropdown:{
    width:"50%",
    height:30,
  },
  dropDownPicker:{
    backgroundColor:COLORS.white1,
    borderRadius:0,
  },
  dropDownContainerStyle:{
    backgroundColor:COLORS.white1,
    borderRadius:0,
    zIndex:1000,
  },
  dropdownText:{
    color:COLORS.grey2,
    fontFamily:FONTS.text,
    fontWeight:"400",
    fontSize:12,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lisenceContainer:{
    marginBottom:"10%",
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  cartButton: {
    backgroundColor: COLORS.black,
  },
  cartButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.text,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },
  checkoutButtonStyle: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
    marginVertical: 10,
  },
  checkoutButtonText: {
    color: COLORS.black,
    fontFamily: FONTS.text,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },
});
export default styles;
