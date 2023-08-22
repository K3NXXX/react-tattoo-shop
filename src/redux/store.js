import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        categorySlice,
        cartSlice,
    }
})