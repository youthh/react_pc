import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import { getDatabase, onValue, query, ref} from "firebase/database";



export const getSearchMovies = createAsyncThunk(
    'headerSlice/getSearchMovies',
    async () => {

    }

)

const headerSlice = createSlice({

    name: "header",

    initialState: {
        activeSection: true,
        isActiveMenu: false,
        theme: true,
        searchMovies: []
    },

    reducers: {
        setActiveMenu: (state) => {
            state.isActiveMenu ? state.isActiveMenu = false  : state.isActiveMenu = true;
        },
        setThem: (state) => {
            state.theme ? state.theme = false : state.theme = true
        },
        setMoviesSearch: (state) => {
            const db = getDatabase();

            const starCountRef = query(ref(db, 'movies'));
            let a = [];
            state.searchMovies = onValue(starCountRef, (snapshot) => {
                console.log(snapshot.val())
            });
            debugger
            state.searchMovies = a
        }
    },
    extraReducers: {

    }
})



export const {setActiveMenu, setThem, setMoviesSearch} = headerSlice.actions


export default headerSlice.reducer;