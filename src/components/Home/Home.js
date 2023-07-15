import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
const Home = () => {
  useEffect(() => {
    console.log(APIkey);
    const fetchmovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=movie&type=movie`)
        .catch((err) => {
          console.log("Error occured in movies api fetch");
        });
        console.log(response)
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
