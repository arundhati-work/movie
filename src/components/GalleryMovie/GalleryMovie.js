import React from "react";
import { useSelector } from "react-redux";
import NoImgAvl from "../../assets/NoImgAvl.png";
import star from "../../assets/star.png";
import { NavLink } from "react-router-dom";
import "./GalleryMovie.css";

export default function GalleryMovie(props) {
  const { movies } = useSelector((state) => state.movie);
  const movie = movies.find((m) => m.show.id === props.id) || {};
  const link = "/description/" + movie.show.id;

  return (
    <NavLink to={link}>
      <div id="gallery-movie-component">
        <img className="movie-poster"
          src={movie.show.image ? movie.show.image.medium : NoImgAvl}
          alt={movie.show.name}
        />
        <p className="movie-title">{movie.show.name}</p>
        <div className="rating-div">
          <img src={star} alt="Rating" />
          <p>
            {movie.show.rating.average ? movie.show.rating.average : "NA"} /
            10.0
          </p>
        </div>
        <p className="genre-div">
          {movie.show.genres.map((genre) => {
            return <span key={genre}>{genre}&nbsp;</span>;
          })}
        </p>
      </div>
    </NavLink>
  );
}
