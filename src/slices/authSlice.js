import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



export const userLoginThunk = createAsyncThunk(
    'auth/userLoginThunk',
    async (data) => {

    }
)

export const userLogoutThunk = createAsyncThunk(
    'auth/userLogoutThunk',
    async (data) => {

    }
)

export const userAuthThunk =  createAsyncThunk(
    'auth/userAuthThunk',
    async () => {
        return await  axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
            'API-KEY': '5735f1e3-bb87-46ff-8b5d-43e7d0fa3ba0',

        }).then((data) => {

           return  data.data

        })

    },

)




const authSlice = createSlice({
    name: 'auth',

    initialState: {
        email: null,
        id: null,
        login: null,
        isAuth: false,
        isFetching: false,
        imgUser: null
    },

    reducers: {
        setFetch: (state, value) => {
            state.isFetching = value
        },
        setUser: (state, value) => {
            state.email = value.payload.email
            state.id = value.payload.googleId
            state.login = value.payload.name
            state.imgUser = value.payload.imageUrl
            state.isAuth = true
        }
    },

    extraReducers: {
        [userAuthThunk.pending]: (state) => {
            state.isFetching = true;
        },
        [userAuthThunk.fulfilled]: (state, action) => {
            //[state.email, state.id, state.login] = action.payload
             state.email = action.payload.data.email
             state.id = action.payload.data.id
             state.login = action.payload.data.login

            if (action.payload.resultCode === 0) {
                state.isAuth = true

            }


        },
        [userLoginThunk.fulfilled]: (state, action) => {
            state.id = action.payload.data.userId
        },
        [userLogoutThunk.fulfilled]: (state) => {
            state.isAuth = false
            state.email = null
            state.id = null
            state.login = null
            state.imgUser = null
        }
    }
})

export const {setUserAuthApi, dis, setUser} = authSlice.actions

export default authSlice.reducer