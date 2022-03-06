import React, {useContext} from "react";
import CommentMovie from "./Comment/CommentMovie";

import AddComment from "./Comment/AddComment";
import './MovieItemInside.style.css'
import Loading from "../../Loading/Loading";
import ReactPlayer from 'react-player'
import {ThemeContext} from "../../Providers/ThemeProvider";

const RedMovie = (props) => {
    let {type} = useContext(ThemeContext)

    if (!props.currentMovie) {
        return <Loading/>
    }
    else {

        return (
            <div className={type ? 'movie-inside-block' : 'movie-inside-block lite'}>
                <h3 className="movie_name">{props.currentMovie.name}</h3>
                <h4 className="movie_item-year">{props.currentMovie.year}</h4>
                <img src={props.currentMovie.srs} alt="movieImg"/>
                <h4 className="title_about-movie">About movie</h4>
                <p className="movie_item-describe">
                    Эдди Брок приспосабливается к жизни в качестве носителя инопланетного симбиота Веном и попутно восстанавливает карьеру журналиста. Выбранный для написания статьи о серийном убийце Клетусе Кэссиди, доживающего остаток своих дней в камере смертников, журналист получает обещание преступника предоставить эксклюзивные данные об его жизни. Однако для этого Эдди должен опубликовать сообщение для Фрэнсис Баррисон, которая тайно заключена в тюрьму за обладание могущественной силой. Во время последнего визита Брока в камеру смертника Клетус кусает репортера, а его кровь превращает преступника в Карнажа — более смертоносную версию Венома. Когда Карнаж и Фрэнсис оказываются на свободе, Эдди переживает кризис в отношениях с Веномом и обращается за помощью к своей бывшей девушке Энн.
                </p>

                <div className="movie_block">

                    <ReactPlayer    width={790} height={460} controls={true}
                                   url={props.currentMovie.videoUrl}/>
                </div >

                <div className="block_comment">
                    <h4 className={"comment-title"}>Comments</h4>
                    {
                        props.currentMovie.comment.map((c) => {

                            return <CommentMovie key={c.id} name={c.name} txt={c.txt} data={c.data}/>
                        })
                    }

                </div>
                <AddComment addCom={props.addComment} isAuth={props.isAuth} txtCom={props.txt}/>
            </div>
        )
    }

}

export default RedMovie;