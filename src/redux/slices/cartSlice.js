import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalPrice: 0,

   
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action) {
            state.items.push(action.payload) ;
        },
        removeItems(state, action) {
            state.items = state.items.filter(obj => obj !== action.payload)
        },
        clearItems(state, action) {
            state.items = []
        },
    }
})
export const {addItems, removeItems, clearItems} = cartSlice.actions
export default cartSlice.reducer