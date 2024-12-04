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
      const exist = state.cart.find((vl:any) => vl.id === action.payload.id && vl.color==action.payload.color && vl.size==action.payload.size);
       action.payload.cartId=state.cart[state.cart.length-1]?.cartId>0?state.cart[state.cart.length-1]?.cartId+1:0+1;

      if (!exist) {
        state.cart.push(action.payload);
      } else {
        exist.qty+=action.payload.qty
      }
    },
    removeItem: (state, action) => {
      const newstate = state.cart.filter((val:any) => val.cartId !== action.payload);
      state.cart = newstate;
    },
  },
});

export const { cartInfo,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
