import React, {useContext} from "react";
import {ThemeContext} from "../Providers/ThemeProvider";
import '../index.css'

const Layout = ({children}) => {

    const {type} = useContext(ThemeContext)


    return (
        <div className={type ? 'lay' : 'lay lite'}>
            {children}
        </div>
    )
}

export default Layout