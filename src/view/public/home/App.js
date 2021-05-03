import React, { useState, useEffect } from "react";
import Movie from "../../../components/Movie";
import logo from '../../../assets/img/logo.png'
import userIcon from '../../../assets/img/user-icon.png';
import { Link } from 'react-router-dom'
import './__styles__/index.css';
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=562bbdb9e5d866e02bfec9eef5edd161";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=562bbdb9e5d866e02bfec9eef5edd161&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      getMovies(`${SEARCH_API}${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return movies.length === 0 ? <h1>Loading...</h1> : (
    <>
      <header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>

          <img onClick={() => { getMovies(FEATURED_API); }} className="header__img" src={logo} alt="MoviesTime" />
          <samp onClick={() => { getMovies(FEATURED_API); }} className='samp'>MoviesTime</samp>

        </div>
        <div className="header__menu">
          <div className="header__menu--profile">
            <img className='profile' src={userIcon} alt="" />
            <p>Perfil</p>
          </div>
          <ul>
            <li><a href="/">Iniciar Sesión</a></li>
          </ul>
        </div>

      </header>
      <div>

        <section className="main">
          <h2 className="main__title">¿Qué quieres ver hoy?</h2>
          <form onSubmit={handleOnSubmit}>
            <input
              type="search"
              className="input"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </section>

      </div>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) =>
            <Link className="movie-container" to={{
              pathname: '/information',
              aboutprops: {
                movie: movie,
              }
            }}>
              <Movie className="movie-container" key={movie.id} {...movie} />
            </Link>
          )}
      </div>
    </>
  );
}

export default App;
