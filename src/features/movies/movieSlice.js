import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {APIkey} from '../../common/apis/MovieApiKey'

export const fetchAllMoviesAsync = createAsyncThunk(
    "movies/fetchAllMoviesAsync",
    async (searchKey) => {
      const movieText = searchKey;
      const response = await movieApi.get(
        `?apiKey=${APIkey}&s=${movieText}&type=movie`
      ).catch((err) => {
            console.log("Error occured in movies api fetch====", err);
          });
  
      return response.data;
    }
  );


  export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (searchKey) => {
      const seriesText = searchKey;
      const response = await movieApi.get(
        `?apiKey=${APIkey}&s=${seriesText}&type=series`
      );
      return response.data;
    }
  );



  export const fetchAsyncSingleMovieOrSingleShowDetail = createAsyncThunk(
    "movies/fetchAsyncSingleMovieOrSingleShowDetail",
    async (id) => {
      const response = await movieApi.get(
        `?apiKey=${APIkey}&i=${id}&Plot=full`
        );
      return response.data;
    }
  );


const initialState = {
    movies: {},
    shows:{},
    singleMovieOrShow:{}
}

const movieSlice = createSlice({
    name:"moviesSlice",
    initialState,
    reducers:{
     //   action creators
        addMovies: (state, action)=>{
            const {payload} = action
            state.movies = payload;

        },
        removeSingleMovieOrShow: (state, action) =>{
          state.singleMovieOrShow={}
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
          },
          [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
          },
          [fetchAsyncSingleMovieOrSingleShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, singleMovieOrShow: payload };
          }
         
    }
})

const  movieReducer=movieSlice.reducer
export const {addMovies, removeSingleMovieOrShow} =movieSlice.actions;
export default movieReducer;