import './MovieListing.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from '../../common/carousel_const'
import { ClipLoader } from 'react-spinners'
const MovieListing = () => {

  const movies = useSelector((state)=>state.movies.movies)
  const shows = useSelector((state)=>state.movies.shows)
  
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
  color:"white"
};

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
    {!movies.Search? 
      (<div> 
          <ClipLoader
            color={`#ffff`}
            loading={movies.Search?  false: true}
            size={150}
            cssOverride={override}
            aria-label="Loading Movie info"
            data-testid="loader"/>
      </div>)
     :(<>
          <div className="movie-list">
                      <h2 style={{"text-align":"center"}}>Movies</h2>
                      <div className="movie-container">
                       <Slider {...Settings}> {renderElement} </Slider>
                      </div>
          </div>
          <div className="movie-list">
                      <h2 style={{"text-align":"center"}}>Shows</h2>
                      <div className="show-container">
                        {renderShows}
                      </div>
          </div>
          </>)
    }
    </div>
  )
}

export default MovieListing
