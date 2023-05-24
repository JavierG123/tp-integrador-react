//Importe de estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";


const Series = () => {
  const API_KEY = "5cfb6e84540e60dcfb925c8dbfcd1aca";
  const URL_BASE = "https://api.themoviedb.org/3/movie/popular?api_key=";
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const URL_API = URL_BASE + API_KEY;

  //variables de estado:
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(URL_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setSeries(data.results);
      });
  }, []);

  return (
    <div className="container-fluid series__container">
      {series.map((se) => (
        <div>
          <div className="card-body text-white text-center p-3" key={se.id}>
            <h5 className="card-title my-2 ">{se.title}</h5>
            <img
              src={API_IMG + se.poster_path}
              className="card-img-top poster__serie"
              alt="Poster Serie"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Series;
