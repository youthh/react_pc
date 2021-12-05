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

                        <div className="containers__inem-movie">
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/8/18/u01d3653225edyc83c93o.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                   <div className="block_item-describe-movie">
                                       <p className="movie__year">2021,</p>
                                       <p className="movie__genre">Fantastic</p>
                                   </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/11/29/i438f1e8659f7pz51m93t.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2020/11/16/z7a92d41541a2jj91g40x.jpeg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/8/20/ldb709d12e29dty52s91i.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/9/5/me8f61c685b22hd16a31g.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/9/5/me8f61c685b22hd16a31g.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/10/11/mabcf4509ac32oq54u85e.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2020/12/26/dae676e47e3cfvg56d86f.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/10/11/mabcf4509ac32oq54u85e.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/9/5/me8f61c685b22hd16a31g.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/10/1/v548be1ff0781ls73z25n.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="movie_item">
                                <a href="#" className="movie__item-link">
                                    <img src="https://static.hdrezka.ac/i/2021/10/25/o203e72cbbd65dj32i98w.jpg" alt="venom" className="movie_item-img"/>
                                    <h3 className="movie__item-name">Venom2</h3>
                                    <div className="block_item-describe-movie">
                                        <p className="movie__year">2021,</p>
                                        <p className="movie__genre">Fantastic</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                  </div>
              </div>
          </div>
      </div>

  )
}

export default MovieBlock