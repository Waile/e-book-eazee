import {Text, View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header';
import {constants} from './constants';
import styles from './styles';
import {Rating} from 'react-native-ratings';
import AppButton from '../../components/app-button';
import COLORS from '../../../utils/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../components/redux/slice/cartSlice';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';
DropDownPicker.setListMode('SCROLLVIEW');

const SingleBook = ({navigation, route}) => {
  const {product} = route.params;
  const [starRating, setStarRating] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: constants.LISENCE_1, value: 1},
    {label: constants.LISENCE_2, value: 2},
    {label: constants.LISENCE_3, value: 3},
    {label: constants.LISENCE_4, value: 4},
    {label: constants.LISENCE_5, value: 5},
  ]);

  const ratingCompleted = rating => {
    console.log(rating);
  };

  const dispatch=useDispatch()
  const handleAddToCart=(book)=>{
    let item=null;
    item={...book,quantity:value};
    dispatch(addToCart(item))
  }

  const handleCheckout=()=>{
    navigation.navigate(Navigation.CART)
  }
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Header title={constants.TITLE} />
          <View style={styles.bookImageContainer}>
            <Image source={{uri: product.image_url}} style={styles.bookImage} />
          </View>
          <View style={styles.bookDetailsContainer}>
            <View style={styles.bookNameContainer}>
              <Text style={styles.bookName}>{product.name}</Text>
            </View>
            <View style={styles.priceContainer}>
              {!product.cost_per_seat && <Text style={styles.priceText}>{constants.FREE}</Text>}
              {product.cost_per_seat && (
                <Text style={styles.priceText}>Price: {product.cost_per_seat} $</Text>
              )}
            </View>
          </View>
          <Text style={[styles.authorName, styles.text]}>
            by <Text style={styles.authorName}>Nicole Trope</Text>
          </Text>
          <View style={styles.ratingsContainer}>
            <Rating
              type="star"
              imageSize={13}
              ratingCount={5}
              ratingColor="#FDE45F"
              ratingTextColor={COLORS.black}
              readonly={true}
              rating={4}
              tintColor={COLORS.white1}
              onFinishRating={ratingCompleted}
              fractions={0}
            />
            <Text style={styles.ratingCount}>(678)</Text>
          </View>
          <View style={styles.lisenceContainer}>
            <Text style={styles.lisceneText}>{constants.LISCENCE_TO_BUY}</Text>
            <View style={styles.dropdown}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={constants.LICENSE}
                style={styles.dropDownPicker}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                zIndex={1000}
                dropDownDirection='TOP'

              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              buttonContainer={styles.cartButton}
              buttonText={styles.cartButtonText}
              title={constants.ADD_TO_CART}
              onPress={()=>handleAddToCart(product)}
            />
            <AppButton
              buttonContainer={styles.checkoutButtonStyle}
              buttonText={styles.checkoutButtonText}
              title={constants.CHECKOUT}
              onPress={handleCheckout}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleBook;
