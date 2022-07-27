import React from "react";

import { useNavigate } from "react-router-dom";

const AddComment = (props) => {
    let nav = useNavigate();
    return(
        <div className="block_add comment">
            <input ref={props.txtCom}  type="text" className="add_txt_comment"/>
            <button onClick={()=> props.isAuth ? props.addCom() :  nav('/') } className="add_comment">Add Comment</button>
        </div>
    )
}

export default AddComment;