import React, {useEffect} from "react";
import {Route,  Routes} from "react-router-dom";
import '../src/Header/Header.style.css'
import RedMovieContainer from "./Movie/IndsideMovie/RedMovieContainer";
import MovieBlockContainer from "./newComponent/MovieBlockContainer";
import HeaderContainer from "./Header/HeaderContainer";
import PostContainer from "./Component/Post/PostContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Profile from "./Component/Profile/Profile";
import LoginF from "./FireBase/auth/auth";
import CategoryMovie from "./Movie/CategoryMovie/CategoryMovie";



function App(){

    useEffect(() => {
        document.title = 'Movies'
    }, [])
    return (

        <div className="App">
            <HeaderContainer/>
            <div className="container">
                <div className="block">
                    <Routes>
                        <Route path={'/Home'}/>
                        <Route path={'/'} element={<LoginF/>}/>
                        <Route path= {"Movies/:genre/:movieName/:idMov" }  element={<RedMovieContainer />}/>
                        <Route path='/Movies/' element={<MovieBlockContainer />}/>
                        <Route path='/Serials' element={<h1 className="serial">No Serials yet</h1>}/>
                        <Route path='Profile' element={<Profile/>}/>}/>
                        <Route path='/Movies/:movCategory' element={<CategoryMovie/>}/>
                    </Routes>
                </div>
            </div>
        </div>

    )
}

const mstp = (state) => ({
    init: state.app.initialized
})

export default  compose(
    connect(mstp, null)(App));
