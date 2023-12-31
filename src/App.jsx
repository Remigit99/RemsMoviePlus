import { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import MovieCard from './MovieCard'

import './App.scss'

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  //OMDB API + KEY
  // const API_URL = import.meta.env.VITE_API_URL_KEY;
  const API_URL = "https://www.omdbapi.com/?i=tt38961&apikey=b0c31de9"

  const getMovies = async (title) => {
    try {
      const res = await fetch(`${API_URL}&s=${title}`)
      const data = await res.json()
      // console.log(data)
      setMovies(data.Search)
      setIsLoading(false)
      setSearch("")

    } catch (error) {
      setError(true)
      setIsLoading(false)
    }


  }

  useEffect(() => {
    getMovies("John Wick")
  }, [])



  // if (movies.length < 1) {
  //   return (

  //   )
  // }

  return (
    <div className='app'>
      <h1 className='logo'>RemsMovie<span>Plus</span></h1>

      <div className="search__box">
        <input type="text" placeholder='Search for movies' value={search} onChange={(e) => setSearch(e.target.value)} />
        <span className='icon__span'>
          <CiSearch className='icon' onClick={() => getMovies(search)}
          />
        </span>
      </div>

      {error ? <section>
        <h1>No Movie Found For Your Search</h1>
      </section> :

        isLoading && <section>
          <h1>Getting Your Movies...</h1>
        </section>

      }
      {/* {
        error && <section>
          <h1>No Movie Found For Your Search</h1>
        </section>
      }
      {
        isLoading && <section>
          <h1>Getting Your Movies...</h1>
        </section>
      } */}

      <section>
        <main>
          {
            movies?.map((movie) => {
              // console.log(movie);
              return (
                // <article key={imdbID} className="movie__card">

                //   <img src={Poster === 'N/A' ? "https://placehold.co/400" : Poster} alt={Title} />

                //   <div className="movie__info">
                //     <h5>{Type}</h5>
                //     <h4>{Title}</h4>
                //     <small>{Year}</small>
                //   </div>

                // </article>

                <MovieCard key={movie.imdbID
                } {...movie} />
              )
            })
          }

        </main>
      </section>
    </div>
  )
}

export default App
