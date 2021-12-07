import React from "react";
import './MovieBlock.style.css'
import {NavLink} from "react-router-dom";

const MovieItem = (props) => {

    return (

        <div className="movie_item">
            <NavLink to = {props.name} className="movie__item-link">
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