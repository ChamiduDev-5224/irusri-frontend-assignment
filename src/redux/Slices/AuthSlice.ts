import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: {
    email: "",
    name: "",
    id:""
  }

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  
  },
});
export const { loggedInfo } = authSlice.actions;
export default authSlice.reducer;
