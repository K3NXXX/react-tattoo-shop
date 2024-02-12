import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { userData } from "./authSlice";



type LoginInitialState = {
    isLogin: boolean;
    loading: string;
    clickAccount: boolean;
    userData: userData | null;
}
const initialState: LoginInitialState = {
    isLogin: false,
    clickAccount: false,
    userData: null,
    loading: ""
    // userData: getUserDataFromLS(),
}
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setIsLogin (state,action:PayloadAction<boolean>) {
            state.isLogin = action.payload
        },
        setClickAccount (state,action:PayloadAction<boolean>) {
            state.clickAccount = action.payload
        },
        setUserData (state,action:PayloadAction<userData>) {
            state.userData = action.payload
        },
    },
 
   
})
export const {setIsLogin,setClickAccount, setUserData} = loginSlice.actions
export default loginSlice.reducer