import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3005/'
})


export const movieApi = {
    getMovies (currentPage, pageSize)  {
        return  instance.get(`movies/?_page=${currentPage}&_limit=${pageSize}`)
            .then((res) => res.data)
    },

    setMovie (a)  {
        return instance.get(`movies?name=${a.movieName}`)
    },

    pageChange (p, pageSize)  {
        return  instance.get(  `movies?_page=${p}&_limit=${pageSize}`)
    }
}



export  const setUserAuth = ()  => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'API-KEY': '5735f1e3-bb87-46ff-8b5d-43e7d0fa3ba0'
            }

        }).then((data) => {
            console.log(data)

        })
}



export const userApi = {
    setUserDb (email, googleId, name, imageUrl) {

        return instance.post('user', {email, googleId, name, imageUrl})
    }
}