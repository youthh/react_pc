import React,{useState} from "react";
import './MovieBlock.style.css'


const MovieBlock = () => {

    let [active, setActive] = useState('menu_movie-link-reit');



   function add() {


   }


  return(
      <div className="intro">
          <div className="container">
              <div className="intro_inner">
                  <h1 className="title_main">Movies</h1>

                  <div className="block_item-movie">
                      <div className="block_item-movie-reiting">
                          <ul className="menu_movie">
                              <li>
                                  <a  href="#" onClick={add}  className={active} >The most populal</a>
                              </li>
                              <li>
                                  <a  href="#" onClick={add} className= {active} >The most oldest</a>
                              </li>
                              <li>
                                  <a  href="#" onClick={add} className={active}>Pending</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default MovieBlock