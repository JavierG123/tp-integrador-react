// Importe de Boostrap:
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = (
  title,
  poster_path,
  vote_average,
  release_date,
  overview
) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h1>{title}</h1>
      <img src={API_IMG + poster_path} alt="Poster of Movie" />
      <p>{vote_average}</p>
      <p>{release_date}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
