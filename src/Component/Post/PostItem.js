import React from "react";



const PostItem = (props) => {

    return (
        <div className="post_item">
            <div className="info_post">
                <h3 className="name_user_post">{props.nameUser}</h3>
                <div className="data">{props.data}</div>
            </div>
            <img className="img_post" src={props.img} alt=""/>
            <div className="stat_post">
                <div className="like_block">
                    <button onClick={() =>  props.setLikes(props.key)} className={props.like  ? 'like-button liked' : 'like-button'}/>
                    <div ref={props.ref} className="likesCount">{props.likeCount}</div>
                </div>
                <div className="post_comment">comments</div>
            </div>
        </div>
    )
}


export default PostItem;