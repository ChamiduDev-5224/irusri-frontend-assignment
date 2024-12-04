import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartInfo: (state, action) => {
      
      // Check if the item already exists in the cart
      const exist = state.cart.find((vl) => vl.id === action.payload.id && vl.color==action.payload.color && vl.size==action.payload.size);
      
      if (!exist) {
        state.cart.push(action.payload);
      } else {
        exist.qty+=action.payload.qty
      }
    },
  },
});

export const { cartInfo } = cartSlice.actions;
export default cartSlice.reducer;
