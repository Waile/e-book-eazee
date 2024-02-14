import {StyleSheet} from 'react-native';
import COLORS from '../../../utils/constants';
import FONTS from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.white1,
  },
  contentContainer: {
    flex:1,
    marginTop: '2%',
  },
  myCartText: {
    fontFamily: FONTS.heading,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: '8%',
    color: COLORS.black,
  },
  myCartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookImage: {
    height: 66,
    width: 46,
  },
  bookDetails: {
    width: 78,
  },
  sectionHeadingText: {
    fontFamily: FONTS.heading,
    fontWeight: '500',
    fontSize: 9.5,
    lineHeight: 11,
    color: COLORS.black,
  },
  textStyle: {
    fontFamily: FONTS.text,
    fontWeight: '400',
    lineHeight: 17,
    fontSize: 8,
    color:COLORS.black
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  emptyCart:{
    textAlign:'center',
    color:COLORS.black,
  },
  trashIcon: {
    marginTop: 23,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: COLORS.black,
  },
});
export default styles;
