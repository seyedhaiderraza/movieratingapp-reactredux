import './MovieDetail.scss';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncSingleMovieOrSingleShowDetail } from '../../features/movies/movieSlice';


const MovieDetail = () => {
const {imdbID} = useParams();
const dispatch = useDispatch();
const data = useSelector((state)=>state.movies.singleMovieOrShow)

useEffect(()=>{
  dispatch(fetchAsyncSingleMovieOrSingleShowDetail(imdbID))
},[dispatch,imdbID])
  return (
    <div className="movie-section">
     <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i>:{data.imdbRating}
          </span>
          <span>
            Votes <i className="fa fa-star"></i>:{data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-star"></i>:{data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-star"></i>:{data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
        </div>
     </div>
     <div className="section-right">
      <img src={data.Poster} alt={data.Title} />
     </div>
    </div>
  )
}

export default MovieDetail
