import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";
import { RootState } from "../store";

export const fetchLogin = createAsyncThunk("auth/fetchLogin", async (userData: userData) => {
    const {data} = await axios.post("/auth/login", userData)
    return data
})

export const fetchRegister = createAsyncThunk("auth/fetchRegister", async (userData: userData) => {
    const {data} = await axios.post("/auth/register", userData)
    return data
})


export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
    const {data} = await axios.get("/auth/me")
    return data
})

export type userData = {
    email: string;    
    fullName: string;
    password: string;
}


type initialStateType = {
    data: userData | null,
    status: string,
    clickAccount: boolean;
}

const initialState: initialStateType = {
    data: null,
    status: "loading",
    clickAccount: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        },
        setClickAccount (state,action:PayloadAction<boolean>) {
            state.clickAccount = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.pending, (state, action) => {
            state.data = null;
            state.status = "loading";
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "loaded";
        });
        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.data = null;
            state.status = "error";
        });

        builder.addCase(fetchAuthMe.pending, (state, action) => {
            state.data = null;
            state.status = "loading";
        });
        builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "loaded";
        });
        builder.addCase(fetchAuthMe.rejected, (state, action) => {
            state.data = null;
            state.status = "error";
        });

        builder.addCase(fetchRegister.pending, (state, action) => {
            state.data = null;
            state.status = "loading";
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "loaded";
        });
        builder.addCase(fetchRegister.rejected, (state, action) => {
            state.data = null;
            state.status = "error";
        });
    },
    
});

export const selectIsAuth = (state:RootState) => Boolean(state.authSlice.data)

export default authSlice.reducer; 

export const {logout, setClickAccount} = authSlice.actions

