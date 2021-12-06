import React, {useState} from "react";
import Header from "./newComponent/Header";
import MovieBlock from './newComponent/MovieBlock'
import MovieItemInside from "./Movie/MovieItemInside";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
function App(props) {

  return (
        <BrowserRouter>
            <div className="App">
                <Header  />
                <Routes>
                    <Route path="/Venom2" element={<MovieItemInside/>}/>
                    <Route path='/MoviesBlock' element={<MovieBlock/>}/>
                </Routes>
            </div>

        </BrowserRouter>
  );
}

export default App;
