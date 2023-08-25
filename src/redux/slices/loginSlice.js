import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogin: false,
    clickAccount: false
}
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setIsLogin (state,action) {
            state.isLogin = action.payload
        },
        setClickAccount (state,action) {
            state.clickAccount = action.payload
        }
    }
   
})
export const {setIsLogin,setClickAccount} = loginSlice.actions
export default loginSlice.reducer