import React from "react";
import  './Header.style.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {



    return (


        <div className="header_block">
            <div className="container">
                <div className="inner_header">
                    <menu>
                        <ul className="menu">
                            <li>
                                <NavLink to="MoviesBlock" className="menu_link">Home</NavLink>
                            </li>
                            <li>
                                <a href="#" className="menu_link">movie</a>

                               <div className="sub_div-menu">
                                   <ul className="muvie_subMenu">
                                       <li className="subMenu_item">
                                           <NavLink to="/Action">Action</NavLink>
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
                            <li>
                                <NavLink to="#" className="menu_link">Cartoons</NavLink>

                                <div className="sub_div-menu">
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
                            <li>
                                <a href="#" className="menu_link">Series</a>

                                <div className="sub_div-menu">
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
                            <li>
                                <a href="#" className="menu_link">New</a>

                                <div className="sub_div-menu">
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


                    <div className="block_logIn">
                        <a href="#" className='login'>Log In</a>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Header