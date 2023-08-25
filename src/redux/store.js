import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";
import loginSlice from "./slices/loginSlice";
export const store = configureStore({
    reducer: {
        categorySlice,
        cartSlice,
        loginSlice,
    }
})