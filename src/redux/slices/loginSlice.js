import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogin: false,
    clickAccount: false,
    userData: JSON.parse(localStorage.getItem("formData")) || [],
    isRegistration: true
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
        },
        setUserData (state,action) {
            state.userData = action.payload
        },
        setIsRegistration(state,action) {
            state.isRegistration = action.payload
        }
        
    }
   
})
export const {setIsLogin,setClickAccount, setUserData, setIsRegistration} = loginSlice.actions
export default loginSlice.reducer