//Importe de estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";


const Movies = () => {
  const API_KEY = "5cfb6e84540e60dcfb925c8dbfcd1aca";
  const URL_BASE = "https://api.themoviedb.org/3/movie/popular?api_key=";
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const URL_API = URL_BASE + API_KEY;

  //variables de estado:
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(URL_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="container-fluid movies__container">
      {movies.map((mov) => (
        <div>
          <div className="card-body p-3" key={mov.id}>
            <h5 className="card-title text-center">{mov.title}</h5>
            <img
              src={API_IMG + mov.poster_path}
              className="card-img-top poster__movie"
              alt="Poster Movie"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
