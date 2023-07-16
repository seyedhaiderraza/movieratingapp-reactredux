import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies, fetchAllMoviesAsync, fetchAsyncShows } from "../../features/movies/movieSlice";
const Home = () => {

  const dispatch = useDispatch();
  const movieText = "Flintstones";
  const showText = "Mickey mouse"

  useEffect(() => {
   
    const fetchmovies = async () => {
      // const response = await movieApi.get(`?apikey=${APIkey}&s=movie&type=movie`)
      //   .catch((err) => {
      //     console.log("Error occured in movies api fetch====", err);
      //   });

        //dispatch(addMovies(response.data))
        dispatch(fetchAllMoviesAsync(movieText))
        dispatch(fetchAsyncShows(showText))
    };
    fetchmovies();
  }, [dispatch]);//why dispatch condition given??



  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
