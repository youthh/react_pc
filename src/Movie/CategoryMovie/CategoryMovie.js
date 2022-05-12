import React, {useContext, useEffect} from "react";
import {ThemeContext} from "../../Providers/ThemeProvider";
import Loading from "../../Loading/Loading";
import MovieItem from "../../newComponent/MovieItem";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesThunkCreator} from "../../redux/movieReducer";
import {useParams} from "react-router-dom";


const CategoryMovie = (props) => {
    const a = useParams()

    let movies = useSelector(state => state.movies.movies)
    const {type} = useContext(ThemeContext)
    let dispatch = useDispatch();
    useEffect(() => {

         dispatch(getMoviesThunkCreator(1, 10))


    },[]);

    return(
        <div className="intro">
            <div className="container">
                <div className="intro_inner">
                    <h1 className={type ? 'title_main' : 'title_main lite'}>Movies {a.movCategory}</h1>

                    <div className="block_item-movie">


                        <>
                            {props.isFetching ? <Loading/> :
                                <div className="containers__inem-movie">
                                    {

                                            movies.map((movie) => {
                                                if (movie.genre.toLowerCase() === a.movCategory.toLowerCase()) {
                                                    return <MovieItem type={type} id={movie.id} key={movie.id} name={movie.name} year={movie.year}
                                                                      genre={movie.genre} img={movie.srs}/>
                                                }
                                            })

                                    }
                                </div>
                            }

                        </>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default CategoryMovie;