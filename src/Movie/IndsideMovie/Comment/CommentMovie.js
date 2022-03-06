import React from "react";
import './comment.css';

const CommentMovie = (props) => {


    return(
        <div className={"item_comment"}>
            <h5 className="name_user">{props.name}</h5>
            <p className="commentTxt">{props.txt}</p>
            <p className="dataMovie">{props.data}</p>
        </div>
    )
}

export default CommentMovie;