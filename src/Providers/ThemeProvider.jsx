import React, {createContext} from "react";
import { useSelector} from "react-redux";


export const ThemeContext = createContext({type: true})

export const ThemeProvider = ({children}) => {
    let type = useSelector(state => state.header.theme);

    return <ThemeContext.Provider value={{type}}>
        {children}
    </ThemeContext.Provider>
}


