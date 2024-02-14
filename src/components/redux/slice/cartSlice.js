import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(product => product.id === item.id);
      if (productItem) {
        productItem.quantity += item.quantity;
      } else {
        state.cartItems = [item, ...state.cartItems];
      }
    },
    updateTotalPrice: (state, action) => {
      const item = action.payload;
      let productItem = state.cartItems.find(product => product.id === item.id);
      if(productItem){
        productItem.totalPrice=item.totalPrice
      }
     
    },
    increment(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(product => product.id === item.id);
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrement(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(product => product.id === item.id);
      if (productItem) {
        productItem.quantity -= 1;
        if (productItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            product => product.id !== item.id,
          );
        }
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        product => product.id !== item.id,
      );
    },
  },
});

export const {addToCart, increment, decrement, removeFromCart,updateTotalPrice} =
  cartSlice.actions;

export default cartSlice.reducer;
