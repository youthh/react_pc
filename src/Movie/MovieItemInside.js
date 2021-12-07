import React from "react";
import MovieItem from "../newComponent/MovieItem";

const MovieItemInside = (props) => {


    return (
        <div>
            <div className="container">
                <h3 className="movie_name">Venom2</h3>
                <h4 className="movie_item-year">2021</h4>
                <img src="https://static.hdrezka.ac/i/2021/11/29/i438f1e8659f7pz51m93t.jpg" alt="movieImg"/>

                <p className="movie_item-describe">
                    Эдди Брок приспосабливается к жизни в качестве носителя инопланетного симбиота Веном и попутно восстанавливает карьеру журналиста. Выбранный для написания статьи о серийном убийце Клетусе Кэссиди, доживающего остаток своих дней в камере смертников, журналист получает обещание преступника предоставить эксклюзивные данные об его жизни. Однако для этого Эдди должен опубликовать сообщение для Фрэнсис Баррисон, которая тайно заключена в тюрьму за обладание могущественной силой. Во время последнего визита Брока в камеру смертника Клетус кусает репортера, а его кровь превращает преступника в Карнажа — более смертоносную версию Венома. Когда Карнаж и Фрэнсис оказываются на свободе, Эдди переживает кризис в отношениях с Веномом и обращается за помощью к своей бывшей девушке Энн.
                </p>
            </div>
        </div>
    )
}



export default MovieItemInside