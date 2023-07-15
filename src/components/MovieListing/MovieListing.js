import './MovieListing.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'


const MovieListing = () => {
  const movies = useSelector((state)=>state.movies.movies)
  const shows = useSelector((state)=>state.movies.shows)
 
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

let renderShows= shows.Response === "True"?
(
 
  shows.Search.map((show,index)=>{
    console.log(show, index)
     return <MovieCard key={index} data={show}/>

})
)
:
(<div className="movielisting-error">

  <h3>{shows.Error}</h3>

</div>);

  return (
    <div className="movie-wrapper">
          <div className="movie-list">
                      <h2 style={{"text-align":"center"}}>Movies</h2>
                      <div className="movie-container">
                        {renderElement}
                      </div>
          </div>
          <div className="movie-list">
                      <h2 style={{"text-align":"center"}}>Shows</h2>
                      <div className="movie-container">
                        {renderShows}
                      </div>
          </div>
    </div>
  )
}

export default MovieListing
