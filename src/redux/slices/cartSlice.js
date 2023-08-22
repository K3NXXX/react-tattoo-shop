import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalPrice: 0,
    successData: false,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            }else {
                state.items.push({...action.payload, count: 1}) ;
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum
            }, 0)
        },
        minusItems(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem) {
                if (findItem.count > 0) {
                    findItem.count--;
                    state.totalPrice -= findItem.price;
                }
            }
        },
        removeItems(state, action) {
            const removedItem = state.items.find(obj => obj.id === action.payload);
            if (removedItem) {
                state.totalPrice -= removedItem.price * removedItem.count;
                state.items = state.items.filter(obj => obj.id !== action.payload);
            }
        },
        setSuccessData(state,action) {
            state.successData = action.payload
        }
        
    }
})
export const {addItems, removeItems, minusItems, setSuccessData} = cartSlice.actions
export default cartSlice.reducer