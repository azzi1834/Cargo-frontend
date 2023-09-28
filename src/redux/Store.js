import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import userReducer from "./slices/user";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storageSession,
};

const persistedReducer = persistReducer(
  persistConfig,
  userReducer,
  authReducer
);

export const Store = configureStore({
  reducer: {
    // auth: authReducer,
    auth: persistedReducer,
    // user: userReducer,
    user: persistedReducer,
  },
  middleware: [thunk],
});
export const persistor = persistStore(Store);
