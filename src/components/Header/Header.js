import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss';
import { fetchAllMoviesAsync, fetchAsyncShows } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const [searchKey, setSearchKey] = useState("")
  const dispatch = useDispatch();

  const submitHandler = (e)=>{
    e.preventDefault() //prevent page refresh on click on search element
    if(searchKey===""){ alert("Please enter valid search key")}
    else{
    dispatch(fetchAllMoviesAsync(searchKey))
    dispatch(fetchAsyncShows(searchKey))
    setSearchKey("")
  }
  }
  return (
   
      <div className="header">
          <Link to="/">
            <div className="logo">Movie App</div>
          </Link>
          <div className="search-bar">
            <form onSubmit={submitHandler}>

              <input type="text" value={searchKey}
               placeholder="Search Movies or Shows"
              onChange={(e)=>setSearchKey(e.target.value)} />

              <button type="submit"><i className='fa fa-search'></i></button>
            </form>
          </div>
          <div className="user-image">
            <img src={user} alt="user pic" />
          </div>
      </div>
      
  )
}

export default Header
