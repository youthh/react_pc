import React from "react";
import  './Header.style.css';

const Header = (props) => {

    return (
        <div className="header_block">
            <div className="container">
                <div className="inner_header">
                    <menu>
                        <ul className="menu">
                            <li>
                                <a href="#" className="menu_link">movie</a>

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
                                <a href="#" className="menu_link">Cartoons</a>

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