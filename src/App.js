import React, {useState} from "react";
import Header from "./newComponent/Header";
import MovieBlock from './newComponent/MovieBlock'
import MovieItemInside from "./Movie/MovieItemInside";
import MovieAction from "./Movie/MovieAction";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import MovieItem from "./newComponent/MovieItem";
function App(props) {

  return (
        <BrowserRouter>
            <div className="App">
                <Header  />
                <Routes>
                    <Route path="MoviesBlock/Venom" element={<MovieItemInside/>}/>
                    <Route path='/MoviesBlock' element={<MovieBlock/>}/>
                    <Route path='/Action' element={<MovieAction/>}/>
                </Routes>
            </div>

        </BrowserRouter>
  );
}

export default App;
