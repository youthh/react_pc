import React, { useEffect} from "react";
import {connect} from "react-redux";
import RedMovie from "./RedMovie";
import {
    addCommentActionCreator,
    setCurrenMovieThunkCreator,
    setCurrentMovie,
    setFetchingAC
} from "../../redux/movieReducer";

import Loading from "../../Loading/Loading";
import {useParams} from "react-router-dom";





const CurrentMovieApi = (props) => {


    const a = useParams()
    useEffect(() => {
        if (!props.currentMovie) {

            props.setCurrentMovie(a)
        }
         return () => {
             props.removeCurrentMovie(null)
         }
    }, [])


    let txt = React.createRef();
    let addComment = () => {
        if (txt.current.value !== '') {
            let txtComment = txt.current.value;
            props.addCommentUp(txtComment, props.login, props.id)


            txt.current.value = "";
        }
        else {
            alert("enter some comments");
        }

    }

        return <>
            {
                props.isFetching ? <Loading/> :
                    <RedMovie  addComment={addComment}
                               txt={txt}
                               currentMovie={props.currentMovie}
                               isAuth={props.isAuth}
                               id={props.id}

                    />

            }
        </>



}



const mapStateToProps = (state) => {

    return {
        movie: state.movies.movies,
        currentMovie: state.movies.currentMovie,
        isFetching: state.movies.isFetching,
        isAuth: state.authUser.isAuth,
        login: state.authUser.login,
        id: state.movies.idM
    }
}

export default connect(mapStateToProps, {
    addCommentUp: addCommentActionCreator,
    setFetching: setFetchingAC,
    removeCurrentMovie: setCurrentMovie,
    setCurrentMovie: setCurrenMovieThunkCreator,
})(CurrentMovieApi);


