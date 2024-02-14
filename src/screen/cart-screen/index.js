import {Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/header';
import {constants} from './constant';
import COLORS from '../../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/app-button';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  removeFromCart,
  updateTotalPrice,
} from '../../components/redux/slice/cartSlice';

const CartScreen = () => {
  const {cartItems} = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const handleIncrement = item => {
    dispatch(increment(item));
    const totalPrice = item.cost_per_seat * (item.quantity + 1);
    let book = {...item, totalPrice: totalPrice};
    dispatch(updateTotalPrice(book));
  };
  const handleDecrement = item => {
    dispatch(decrement(item));
    const totalPrice = item.cost_per_seat * (item.quantity - 1);
    let book = {...item, totalPrice: totalPrice};
    dispatch(updateTotalPrice(book));
  };

  const handleRemoveFromCart = book => {
    dispatch(removeFromCart(book));
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <Header title={constants.TITLE} />
          <Text style={styles.myCartText}>{constants.MY_CART}</Text>
          {cartItems.length > 0 ? (
            cartItems.map(book => (
              <View key={book.id} style={styles.myCartItemContainer}>
                <View>
                  <Image
                    style={styles.bookImage}
                    source={{uri: book.image_url}}
                  />
                </View>
                <View style={styles.bookDetails}>
                  <Text style={styles.sectionHeadingText}>{book.name}</Text>
                  <Text style={styles.textStyle}>
                    {' '}
                    by{' '}
                    <Text
                      style={[
                        styles.textStyle,
                        {color: COLORS.pink, paddingLeft: 2},
                      ]}>
                      Nicole Trope
                    </Text>
                  </Text>
                  {book.cost_per_seat && (
                    <Text style={[styles.textStyle, {fontSize: 10}]}>
                      Price: ${book.cost_per_seat}
                    </Text>
                  )}
                  {!book.cost_per_seat && (
                    <Text style={[styles.textStyle, {fontSize: 10}]}>Free</Text>
                  )}
                </View>
                <View>
                  <Text style={styles.sectionHeadingText}>
                    {constants.SEAT_NUMBER}
                  </Text>
                  <View style={styles.counterContainer}>
                    <Text
                      onPress={() => handleIncrement(book)}
                      style={[styles.textStyle, {fontSize: 14}]}>
                      +
                    </Text>
                    <Text
                      style={[
                        styles.textStyle,
                        {fontSize: 14, marginHorizontal: 10},
                      ]}>
                      {book.quantity}
                    </Text>
                    <Text
                      onPress={() => handleDecrement(book)}
                      style={[styles.textStyle, {fontSize: 14}]}>
                      -
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.sectionHeadingText}>
                    {constants.TOTAL_AMOUNT}
                  </Text>
                  <Text
                    style={[styles.textStyle, {fontSize: 10, marginTop: 10}]}>
                    Price: ${cartItems.totalPrice}
                  </Text>
                </View>
                <View>
                  <Icon
                    name="trash-can-outline"
                    size={12}
                    color={COLORS.pink2}
                    style={styles.trashIcon}
                    onPress={() => handleRemoveFromCart(book)}
                  />
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyCart}>{constants.EMPTY_CART}</Text>
          )}
        </View>
      </ScrollView>
      {cartItems.length > 0 && (
        <View style={styles.buttonContainer}>
          <AppButton
            buttonContainer={styles.checkoutButton}
            title={constants.BUTTON_TEXT}
          />
        </View>
      )}
    </View>
  );
};

export default CartScreen;
