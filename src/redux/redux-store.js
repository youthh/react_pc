import {applyMiddleware} from '@reduxjs/toolkit'
import {combineReducers, createStore} from "redux";
import movieReducer from "./movieReducer";
import PostSlice from "../slices/PostSlice";
import thunk  from "redux-thunk";
import authSlice from "../slices/authSlice";
import appSlice from "../slices/appSlice";
import HeaderSlice from "../slices/HeaderSlice";
import { reducer as formreducer } from 'redux-form'
import userSlice from "../slices/userSlice";


let reducers = combineReducers({
    movies: movieReducer,
    authUser: authSlice,
    post: PostSlice,
    header: HeaderSlice,
    form: formreducer,
    app: appSlice,
    user: userSlice
});



let store = createStore(reducers, applyMiddleware(thunk));

export default store

window.store = store;
