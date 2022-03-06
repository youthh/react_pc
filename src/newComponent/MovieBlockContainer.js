import  React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getMovieSelect,
    getMoviesThunkCreator,
    setFetchingAC,
    setMoviesAC,
    setPageAC,
    setTotalCount
} from "../redux/movieReducer";
import Movies from "./Movies";


const MovieBlockApiComponent = (props) => {

    useEffect(() => {

        if (props.movie.length === 0) {

            props.getMovies(props.currentPage, props.pageSize)
        }
        return () => {
            props.setMovie([])

        }
    },[]);


    return (
        <>

            <Movies
                totalMovies={props.totalMovies}
                pageSize={props.pageSize}

                movie={props.movie}
                currentPage={props.currentPage}
                isFetching={props.isFetching}
            />

        </>
    );

}

const  mapStateToProps = (state) => {

    return {
        movie: getMovieSelect(state),
        pageSize: state.movies.pageSize,
        totalMovies: state.movies.totalMovies,
        currentPage: state.movies.currentPage,
        isFetching: state.movies.isFetching
    }
}

const MovieBlockCont = connect(mapStateToProps, {

    setMovie: setMoviesAC,
    setCurrentPage: setPageAC,
    setTotalCount: setTotalCount,
    setFetching: setFetchingAC,
    getMovies: getMoviesThunkCreator,

})(MovieBlockApiComponent);

export  default  MovieBlockCont;