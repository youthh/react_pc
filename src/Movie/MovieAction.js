import React from "react";
import MovieItem from "../newComponent/MovieItem";
import {NavLink} from "react-router-dom";

const MovieAction = () => {

    return (
        <div className="container">
            <h1 className="title_main">Movies</h1>

            <div className="block_item-movie">
                <div className="block_item-movie-reiting">
                    <ul className="menu_movie">
                        <li>
                            <NavLink to="/popula" className="menu_movie-link-reit">The most populal</NavLink>
                        </li>
                        <li>
                            <NavLink to="old" className="menu_movie-link-reit">The most oldest</NavLink>
                        </li>
                        <li>
                            <NavLink to="new" className="menu_movie-link-reit">Pendin</NavLink>
                        </li>
                    </ul>
                </div>

             </ div>
            <div className="containers__inem-movie">

                <MovieItem name="Venom" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/9/28/g4e3f5034f841fg64c71s.jpg"/>
                <MovieItem name="007-Not-Time-ToDie" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/8/20/ldb709d12e29dty52s91i.jpg"/>
                <MovieItem name="Venom" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/11/5/s1b8cf051f82dmf43r26b.jpg"/>
                <MovieItem name="Dune" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/8/18/u01d3653225edyc83c93o.jpg"/>
                <MovieItem name="Garry-Potter" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2020/11/16/z7a92d41541a2jj91g40x.jpeg"/>
                <MovieItem name="Venom" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/9/28/g4e3f5034f841fg64c71s.jpg"/>
                <MovieItem name="Venom2" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/11/29/i438f1e8659f7pz51m93t.jpg"/>
                <MovieItem name="Venom" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/11/4/a54c5098a6bd8nb46u64c.jpg"/>
                <MovieItem name="Venom" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/9/28/g4e3f5034f841fg64c71s.jpg"/>
                <MovieItem name="Shan-Chi" year="2021" genre="Fantastic"
                           img="https://static.hdrezka.ac/i/2021/9/5/me8f61c685b22hd16a31g.jpg"/>

            </div>
        </div>
    )

}

export default MovieAction;