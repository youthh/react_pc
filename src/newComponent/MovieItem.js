import React from "react";
import './MovieBlock.style.css'

const MovieItem = (props) => {

    return (

        <div className="movie_item">
            <a href= {props.name} className="movie__item-link">
                <img src={props.img} alt="venom" className="movie_item-img"/>
                <h3 className="movie__item-name">{props.name}</h3>
                <div className="block_item-describe-movie">
                    <p className="movie__year">{props.year},</p>
                    <p className="movie__genre">{props.genre}</p>
                </div>
            </a>
        </div>
    )

}


export default MovieItem