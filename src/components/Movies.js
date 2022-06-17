import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
    <h1>Movies Page</h1>
      {movies.map( movie => {
      return (<div key={movie.title}>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <ul>
        {movie.genres.map( genre=>{
          return <li key={genre}>{genre}</li>
        })}</ul>
        
      </div>)
    })}
    </>
    )
}

export default Movies;
