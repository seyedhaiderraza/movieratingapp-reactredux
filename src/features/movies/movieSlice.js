import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {}
}

const movieSlice = createSlice({
    name:"moviesSlice",
    initialState,
    reducers:{
        //action creators
        addMovies: (state, action)=>{
            const {payload} = action
            state.movies = payload;

        }

    }
})

const  movieReducer=movieSlice.reducer
export const {addMovies} =movieSlice.actions;
export default movieReducer;