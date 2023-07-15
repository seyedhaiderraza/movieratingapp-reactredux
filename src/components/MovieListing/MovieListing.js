import './MovieListing.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'


const MovieListing = () => {
  const movies = useSelector((state)=>state.movies.movies)
 
  let renderElement= movies.Response === "True"?
  (
   
    movies.Search.map((movie,index)=>{
      console.log(movie, index)
       return <MovieCard key={index} data={movie}/>

  })
  )
  :
  (<div className="movielisting-error">

    <h3>{movies.Error}</h3>

  </div>);

  return (
    <div className="movie-wrapper">
    <div className="movie-list">
      <h2 style={{"text-align":"center"}}>Movies</h2>
      <div className="movie-container">
        {renderElement}
      </div>
    </div>
    </div>
  )
}

export default MovieListing
