import React, {useEffect, useRef, useState} from "react";
import  './Header.style.css';
import {NavLink} from "react-router-dom";
import {getDatabase, ref, onValue, query} from 'firebase/database';
import {useDispatch} from "react-redux";
import {getSearchMovies} from "../slices/HeaderSlice";



const Header = (props) => {
    let reference = useRef();
    let refInput = useRef();


    useEffect(() => {
        const checkClickOut = (e) => {
            if (props.isMenuOpen && reference.current  && !reference.current.contains(e.target)) {
                props.setIsMenuOpen(false);

            }
        }
        document.addEventListener("mousedown", checkClickOut)




        return () => {
            document.removeEventListener("mousedown", checkClickOut)
        }

    }, [props.isMenuOpen])

    let movies = [];
    if (movies.length === 0) {
        const db = getDatabase();
        const starCountRef = query(ref(db, 'movies'));
        onValue(starCountRef, (snapshot) => {
            movies = snapshot.val()

        });
    }
    let [filter, setFilter] = useState([])
    const handleFilter = (event) => {

        const searchWord = event.target.value
        const data = movies.filter((value => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        }))

        if (searchWord !== "") {

            setFilter(data)
        } else {
            setFilter([])
        }

    }
    let dispatch = useDispatch();
    return (
            <div className={props.type ? 'header_block' : 'header_block lite'}>
                <div className="container">
                    <div className="inner_header">
                        <menu>
                            <ul className="menu">
                                <li className={props.type ? 'li-hover' : 'li-hover lite' }>
                                    <NavLink to="News" className="menu_link">News</NavLink>
                                </li>
                                <li className={props.type ? 'li-hover' : 'li-hover lite' }>
                                    <NavLink to="Movies"
                                             className={props.type ? 'menu_link' : 'menu_link lite' }>movies</NavLink>

                                    <div className={ props.type ? 'sub_div-menu' : 'sub_div-menu lite'}>
                                        <ul className="muvie_subMenu">
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Action">Action</NavLink>
                                            </li>
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Comedy">Comedy</NavLink>
                                            </li>
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Thriller">Thriller</NavLink>

                                            </li>
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Sport">Sport</NavLink>
                                            </li>
                                        </ul>
                                        <ul className='muvie_subMenu'>
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Fantasy">Fantasy</NavLink>

                                            </li>
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Horror">Horror</NavLink>
                                            </li>
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Adventure">Adventure</NavLink>
                                            </li>
                                            <li className="subMenu_item">
                                                <NavLink to="Movies/Fantastic">Fantastic</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className={props.type ? 'li-hover' : 'li-hover lite' }>
                                    <NavLink to={'/Serials'} className="menu_link">Serials</NavLink>

                                    <div className={ props.type ? 'sub_div-menu' : 'sub_div-menu lite'}>
                                        <ul className="muvie_subMenu">
                                            <li className="subMenu_item">
                                                <a href="#">Action</a>
                                            </li>
                                            <li className="subMenu_item">
                                                <a href="#">Comedy</a>
                                            </li>
                                            <li className="subMenu_item">
                                                <a href="#">Thriller</a>
                                            </li>
                                            <li className="subMenu_item">
                                                <a href="#">Fiction</a>
                                            </li>
                                        </ul>
                                        <ul className='muvie_subMenu'>
                                            <li className="subMenu_item">
                                                <a href="#">Fantasy</a>
                                            </li>
                                            <li className="subMenu_item">
                                                <a href="#">Horror</a>
                                            </li>
                                            <li className="subMenu_item">
                                                <a href="#">Adventure</a>
                                            </li>
                                            <li className="subMenu_item">
                                                <a href="#">Sports</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </menu>

                        <div className="search">
                            <input ref={refInput} onFocus={() => {
                                props.setTouch(true)

                                dispatch(getSearchMovies());

                            }
                            } id="search"  className="input_search"
                                   onChange={(e) => handleFilter(e)} placeholder="find movie..." type="search"/>
                            {filter.length !== 0 &&
                            <div className="search_table">
                                {

                                    filter.map((m, key) => {

                                        return <li className="search_item">
                                            <NavLink onClick={() =>  {
                                                reference.current.value = ''
                                                setFilter([]);
                                            } }

                                                     key={key} to={"Movies/"+ m.name +'/'+ (m.id -1).toString()}>{m.name}</NavLink>
                                        </li>
                                    })
                                }
                            </div>
                            }
                        </div>
                        <div className="block_logIn" ref={reference}  >
                            {props.authS ?
                                <div  onClick={() => props.setIsMenuOpen(o => !o)} className="user_room"><div className="ava">
                                    <img src={props.img ? props.img : "https://img.icons8.com/dusk/64/000000/small-smile.png"  }/>
                                </div><p className="login_col">{props.login}</p></div>
                                : <NavLink to={'/login'} className='login'>Log In</NavLink>}



                            {
                                props.isMenuOpen ?
                                    <div  className={(props.authS && props.isMenuOpen ? "info_prof activeBtn" : 'info_prof')
                                        + (props.type ? " " : ' lite')
                                    }>
                                        <div>
                                            <li className="info_user">
                                                <NavLink to="Profile" >Profile</NavLink>
                                            </li>
                                        </div>
                                        <div onClick={() => props.setTheme()}
                                             className={props.theme ? 'switch-btn switch-on' : 'switch-btn'}>🌜 🌞</div>

                                        <button className="btn_exit" onClick={() => props.logout()}>Exit</button>

                                    </div> : null
                            }


                        </div>
                    </div>
                </div>


            </div>

    )
}


export default Header