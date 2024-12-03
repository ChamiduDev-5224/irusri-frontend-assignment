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
        let obj = {
            email:action.payload.email,
            id:action.payload.id,
            name:action.payload.name
        }
      state.userInfo = obj;      
    },
  
  },
});
export const { loggedInfo } = authSlice.actions;
export default authSlice.reducer;
