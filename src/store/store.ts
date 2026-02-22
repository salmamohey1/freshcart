// store.ts
import { configureStore } from "@reduxjs/toolkit";

// Importing slices
import authReducer from "../store/Slices/authSlice";
import cartReducer from "../store/Slices/cartSlice";
import wishlistReducer from "../store/Slices/wishlistSlice";
import compareReducer from "../store/Slices/compareSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,         
    cart: cartReducer,        
    wishlist: wishlistReducer, 
    compare: compareReducer,   
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
