import React, {useContext} from "react";
import MovieItem from "./MovieItem";
import Loading from "../Loading/Loading";
import {ThemeContext} from "../Providers/ThemeProvider";
import './MovieBlock.style.css'

const Movies = (props) => {

    const {type} = useContext(ThemeContext)

    return <div>

        {
            <div className="intro">
                <div className="container">
                    <div className="intro_inner">
                        <h1 className={type ? 'title_main' : 'title_main lite'}>Movies</h1>

                        <div className="block_item-movie">


                           <>
                               {props.isFetching ? <Loading/> :
                                   <div className="containers__inem-movie">
                                       {

                                           props.movie.map((movie) => {

                                               return <MovieItem type={type} id={movie.id} key={movie.id} name={movie.name} year={movie.year}
                                                                 genre={movie.genre} img={movie.srs}/>
                                           })

                                       }
                                   </div>
                               }

                           </>

                        </div>
                    </div>s
                </div>
            </div>
        }
    </div>
}

export default Movies;