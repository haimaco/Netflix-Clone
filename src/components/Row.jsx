import React ,{ useState,useEffect}from 'react'
import axios from './axios';
import "./Row.css"

const base_url= "http://image.tmdb.org/t/p/original/"
const Row=({title, fetchUrl})=> {
    const {movies,setMovies}=useState([]);
    useEffect(()=>{
//if [],run once when the row laods,and dont run again
  async  function fetchData (){
  const request =await axios.get(fetchUrl);

  setMovies(request.data.results); 
  return request;

}
    fetchData();
  
  },[fetchUrl]);

  return (
    <div className="row">
        <h2>{title} </h2>
        <div className="row_posters">

        {movies.map(movie =>(
          <img 
          key={movie.id}
          className="row_poster"
           src={`${base_url}${movie.poster_path}`}
           alt={movie.name} />
           ))};
        </div>
        {/* container */}
    </div>
  )
}
export default Row;