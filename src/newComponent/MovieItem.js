import React from "react";
import './MovieBlock.style.css'
import {NavLink, useParams} from "react-router-dom";



const MovieItem = (props) => {

    let genre = useParams()
    console.log(genre.movCategory)

    return (

        <div className="movie_item">
            <NavLink to={genre.movCategory !== undefined ? props.name + "/" +(props.id-1).toString() :
               props.genre + "/" + props.name + "/" +(props.id-1).toString()
            }
                     className={props.type ? "movie__item-link" : "movie__item-link lite"}>
                <img src={props.img} alt="venom" className="movie_item-img"/>
                <h3 className="movie__item-name">{props.name}</h3>
                <div className="block_item-describe-movie">
                    <p className="movie__year">{props.year},</p>
                    <p className="movie__genre">{props.genre}</p>
                </div>
            </NavLink>
        </div>

    )

}


export default MovieItem