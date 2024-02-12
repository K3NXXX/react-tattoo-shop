import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";
import loginSlice from "./slices/loginSlice";
import authSlice from "./slices/authSlice";
export const store = configureStore({
    reducer: {
        categorySlice,
        cartSlice,
        loginSlice,
        authSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch