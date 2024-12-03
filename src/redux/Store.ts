import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
export const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Optionally, define RootState and AppDispatch for use throughout your app
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
