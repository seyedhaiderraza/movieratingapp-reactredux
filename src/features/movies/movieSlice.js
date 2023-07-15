import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {APIkey} from '../../common/apis/MovieApiKey'

export const fetchAllMoviesAsync = createAsyncThunk(
    "movies/fetchAllMoviesAsync",
    async () => {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIkey}&s=${movieText}&type=movie`
      ).catch((err) => {
            console.log("Error occured in movies api fetch====", err);
          });
  
      return response.data;
    }
  );








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

    },
    extraReducers:{
        [fetchAllMoviesAsync.pending]: () => {
            console.log("Pending");
          },
          [fetchAllMoviesAsync.rejected]: () => {
            console.log("Rejected!");
          },
          [fetchAllMoviesAsync.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
          }
         
    }
})

const  movieReducer=movieSlice.reducer
export const {addMovies} =movieSlice.actions;
export default movieReducer;