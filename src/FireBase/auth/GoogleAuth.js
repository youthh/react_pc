import React from "react";
import GoogleLogin from "react-google-login";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../slices/authSlice";
import {useDispatch} from "react-redux";
import {setUserDataBase} from "../../slices/userSlice";


const GoogleAuth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const clientId = '318167226025-katjnh9atjt3ipuvlhl1p5nc6obc0tah.apps.googleusercontent.com';

    const responseGoogle = (response) => {
        dispatch(setUser(response.profileObj));
        dispatch(setUserDataBase(response.profileObj))

        navigate('/Movies')
    }

    return(
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />


    )

}


export default GoogleAuth;