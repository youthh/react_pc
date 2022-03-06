
import {getDatabase, set, child, get  ,ref} from "firebase/database";




let initState = {
    movies: [

    ],
    pageSize: 10,
    totalMovies: 20,
    currentPage: 1,
    isFetching: true,
    currentMovie: null
}

const movieReducer = (state = initState, action  ) => {
    switch (action.type){

        case 'ADD-COMMENT':

            let newComment = {
                id: state.currentMovie.comment.length,
                name: action.name,
                data: action.data,
                txt: action.txt,
            }

            state.currentMovie.comment.push(newComment)

            writeNewDataComment(newComment.id,
                newComment.name, newComment.data, newComment.txt, action.idMov)

            return  {
                ...state,
               currentMovie: {...state.currentMovie},

            };
        case 'SET-MOVIES': {

           return  {
               ...state,
               movies: action.moviesSet
           }

        }
        case 'SET-PAGE':
            return  {
                ...state,
                currentPage: action.currentP
            }
        case 'SET-TOTAL-NUM':
            return {
                ...state,
                totalMovies: action.n
            }
        case 'TOGGLE-IS-FETCHING':
            return  {
                ...state,
                isFetching: action.isFetching
            }
        case 'SET-CURRENT-MOVIE':

            return {
                ...state,
                currentMovie: action.currentMovie,
                idM: action.id

            }
            default:
                return state;
        }

}
export  const addCommentActionCreator = (txt, nameLogin, idMov, id) => {
   let  current = new Date();
    let data = current.getFullYear() +"/"+(current.getMonth() +1)+ "/" + current.getDate() + " "
        + current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

    return {
        type: 'ADD-COMMENT',
        id: id,
        txt: txt,
        data: data,
        name: nameLogin,
        idMov
    }
}

export const setMoviesAC = (moviesSet) => {
    return {
        type: 'SET-MOVIES',
        moviesSet
    }
}

export const setPageAC = (currentP) => {
    return {
        type: 'SET-PAGE',
        currentP
    }
}

export const setFetchingAC = (isFetching) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}

export  const  setTotalCount = (n) => {
    return {
        type: 'SET-TOTAL-NUM',
        n
    }
}

export const setCurrentMovie = (currentMovie, id) => {
    return {
        type: 'SET-CURRENT-MOVIE',
        currentMovie,
        id
    }
}

// THUNK

export const getMoviesThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(setFetchingAC(true))
        const db = ref(getDatabase())
       // const starCountRef =
           // query(ref(db, 'movies'), orderByChild('id'), startAt(currentPage), endAt(currentPage + 9));

        get(child(db, 'movies', ))
            .then((data) => {
                dispatch(setMoviesAC(data.val()))
                dispatch(setFetchingAC(false))
            })
        dispatch(setTotalCount(20))
    }
}


export const setCurrenMovieThunkCreator = (a) => {
    return (dispatch) =>     {

        const db = ref(getDatabase());

        get(child(db, 'movies/' + a.idMov))
            .then((data) => {
                dispatch(setCurrentMovie(data.val(), a.idMov))
            })

    }
}

// selectors

export  const getMovieSelect = (state) => {
    return state.movies.movies
}
// Data base

const writeNewDataComment = (id, name, data, txt, idMovie) => {
    const db = getDatabase();
    set(ref(db, 'movies/' + idMovie + '/comment/' + id),{id, name, data, txt})
        .then((r) => console.log(r));
}

export  default movieReducer