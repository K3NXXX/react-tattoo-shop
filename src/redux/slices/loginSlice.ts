import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Data } from "../../components/Header/RegistrationForm"
import { getUserDataFromLS } from "../../utils/getUserDataFromLS";

type LoginInitialState = {
    isLogin: boolean;
    clickAccount: boolean;
    userData: Data;
}
const initialState: LoginInitialState = {
    isLogin: false,
    clickAccount: false,
    userData: getUserDataFromLS(),
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
        setUserData (state,action:PayloadAction<Data>) {
            state.userData = action.payload
        },
    }
})
export const {setIsLogin,setClickAccount, setUserData} = loginSlice.actions
export default loginSlice.reducer