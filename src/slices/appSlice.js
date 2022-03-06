import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const initializeApp = createAsyncThunk(
    'appSlice/initialize',
    async () => {

    }
)


const appSlice = createSlice({
    name: 'appSlice',

    initialState: {
        initialized: false,
    },

    reducers: {
        setInit: (state) => {

            state.initialized = true
        }
    },

    extraReducers: {
        [initializeApp.pending]: () => {

        },
        [initializeApp.fulfilled]: (state) => {
            state.initialized = true
        }
    }
})

export const {} = appSlice.actions

export const selectInit = (state) =>  state.app.initialized


export default appSlice.reducer