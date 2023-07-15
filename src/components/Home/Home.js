import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {

  const dispatch = useDispatch();


  useEffect(() => {
   
    const fetchmovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=movie&type=movie`)
        .catch((err) => {
          console.log("Error occured in movies api fetch");
        });

        dispatch(addMovies(response.data))
    };
    fetchmovies();
  }, []);



  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
