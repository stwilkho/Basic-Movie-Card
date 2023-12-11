import React, { useState } from "react"
import { useEffect } from "react"
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard"

// 9a406171

const apiurl = "http://www.omdbapi.com?apikey=9a406171"

/*
const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
}*/

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState("")

  const sm = async (t) => {
    const response = await fetch(`${apiurl}&s=${t}`)
    const d = await response.json()

    setMovies(d.Search)
  }
  useEffect(() => {
    sm("Superman")
  }, [])

  return (
    <div className="app">
      <h1>W M C</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchMovie}
          onChange={(event) => setSearchMovie(event.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => sm(searchMovie)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
