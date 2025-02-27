import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import counterReducer from "./slices/counterSlice";
import tshirtCustomizerReducer from "./slices/tshirtSlice";

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["tshirtCustomizer"], // Only persist the tshirtCustomizer slice
};

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  tshirtCustomizer: tshirtCustomizerReducer,
});

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
