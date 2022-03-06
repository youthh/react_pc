import React from "react";
import {Route, Routes} from "react-router-dom";
import '../src/Header/Header.style.css'
import RedMovieContainer from "./Movie/IndsideMovie/RedMovieContainer";
import MovieBlockContainer from "./newComponent/MovieBlockContainer";
import HeaderContainer from "./Header/HeaderContainer";
import PostContainer from "./Component/Post/PostContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Profile from "./Component/Profile/Profile";
import LoginF from "./FireBase/auth/auth";



function App(){

    return (

        <div className="App">
            <HeaderContainer/>
            <div className="container">
                <Routes>
                    <Route path={'/news'} element={<PostContainer/>}/>
                    <Route path={'/login'} element={<LoginF/>}/>
                    <Route path= {"Movies/:movieName/:idMov" }  element={<RedMovieContainer />}/>
                    <Route path='/Movies' element={<MovieBlockContainer />}/>
                    <Route path='/Serials' element={<h1 className="serial">No Serials yet</h1>}/>
                    <Route path='Profile' element={<Profile/>}/>}/>
                </Routes>
            </div>
        </div>

    )
}

const mstp = (state) => ({
    init: state.app.initialized
})

export default  compose(
    connect(mstp, null)(App));
