import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";




export const postThunk = createAsyncThunk(
    'post/postThunk',
    async () => {
       return  await  axios.get('http://localhost:3005/posts').then((data) => data.data)
    }
)

const PostSlice = createSlice({
    name: "post",
    initialState: {
        isFetching: true,
        post: [],
    },
    reducers: {
        setLike(state, action) {
            state.post.map((post) => {
                if (post.id === action.payload.id) {
                    if (post.likeValue) {
                        post.likeCount -= 1;
                        post.likeValue = false
                        axios.patch('http://localhost:3005/posts/'  + action.payload.id , {
                            likeValue: false,
                            likeCount: post.likeCount
                        })
                    }
                    else {
                        post.likeValue = true
                        post.likeCount += 1
                        axios.patch('http://localhost:3005/posts/' + action.payload.id, {
                            likeValue: true,
                            likeCount: post.likeCount
                        })
                    }

                }
            })
        },
        setPost(state , action) {
           state.post = [...action.payload]

        },
        setFetch(state, action) {
            state.isFetching = action.payload;
        },
        showAll(state) {
           state.showAll = !state.showAll;
        }

    },
    extraReducers: {
        [postThunk.pending]: (state) => {
            state.isFetching = true
        },
        [postThunk.fulfilled]: (state, action) => {

            state.isFetching = false
            state.post = action.payload
        },
        [postThunk.rejected]: () => {

        },
    }
});


export const {showAll, setLike, setFetch, setPost} = PostSlice.actions;

export default PostSlice.reducer;