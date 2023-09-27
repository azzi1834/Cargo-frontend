import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import userReducer from "./slices/user";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
