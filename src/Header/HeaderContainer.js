import React, {useContext, useState} from "react";
import Header from "./Header";
import {connect, useDispatch, useSelector} from "react-redux";
import {setActiveMenu, setThem} from "../slices/HeaderSlice";
import {userLogoutThunk} from "../slices/authSlice";
import {ThemeContext} from "../Providers/ThemeProvider";



const HeaderContainer = (props) => {
    const dispatch = useDispatch();
    const themS = useSelector((state => state.header.theme))
    let {type} = useContext(ThemeContext)


    let [touched, setTouch] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    const setThemeSite = () => {
       dispatch(setThem());
    }

    const logout = () => {
        dispatch(userLogoutThunk())
        dispatch(setActiveMenu())
    }

    return <Header
        login={props.stateLogin}
        authS={props.authStat}
        active={props.activeS}
        logout={logout}
        img={props.img}
        theme={themS}
        setTheme={setThemeSite}
        setTouch={setTouch}
        touched={touched}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        type={type}
    />
}


const mstp = (state) => {

    return {
        stateLogin: state.authUser.login,
        authStat: state.authUser.isAuth,
        activeS: state.header.activeSection,
        img: state.authUser.imgUser,

    }
}

export default connect(mstp, {

})(HeaderContainer);