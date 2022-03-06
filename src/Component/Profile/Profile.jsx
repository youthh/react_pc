import React, {useContext} from "react";
import {useSelector} from "react-redux";
import './Profile.css'
import {ThemeContext} from "../../Providers/ThemeProvider";
const Profile = () => {

    let user = useSelector(state => state.authUser);
    let {type} = useContext(ThemeContext);
    return (
        <div >
           <h1 className="title_main">Profile</h1>
            <div className="box_img">
                <img src={user.imgUser} className="profile_img" alt="photo_user"/>
            </div>
            <h4 className={ type ? "email_profile" : 'email_profile litel' }>{user.email}</h4>
            <h4 className={ type ? "email_profile" : 'email_profile litel'}>{user.login}</h4>
        </div>
    )
}


export default Profile;