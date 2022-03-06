import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const setUserDataBase = createAsyncThunk(
    'userSlice/setUserDataBase',
    async (data) => {

    }
)


const userSlice = createSlice({
    name: 'userSlice',

    initialState: {

    },

    reducers: {

    }
})

export const {} = userSlice.actions

export default userSlice.reducer