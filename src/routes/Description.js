import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoImgAvl from "../assets/NoImgAvl.png";
import { NavLink } from "react-router-dom";
import "../styles/Description.css";

export default function Description() {
  function removeHtmlTags(htmlString) {
    var doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const { id } = useParams();
  const { movies } = useSelector((state) => state.movie);
  const movie = movies.find((m) => m.show.id === parseInt(id));
  const link = "/booking/" + movie.show.id;

  const cleanedSummary = removeHtmlTags(movie.show.summary);

  // Check if movies array is empty
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>; // You can also display an error message
  }

  return (
    <div id="movie-description-component">
      <Header />
      <div id="description-component-contents">
        <div className="title-div">
          <div className="img-div">
            <img
              src={movie.show.image ? movie.show.image.medium : NoImgAvl}
              alt={movie.show.name}
            />
          </div>
          <div className="text-div">
            <p className="movie-title">{movie.show.name}</p>
            <div>
              <p className="movie-rating">
                {movie.show.rating.average ? movie.show.rating.average : "NA"} /
                10.0
              </p>
            </div>
            <p className="movie-genre">
              {movie.show.genres.map((genre) => {
                return (
                  <span key={genre}>
                    <u>{genre}</u>{" "}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <h2>Movie Summary</h2>
        <p>{cleanedSummary}</p>
        <h3>Movie Timings</h3>
        <div className="timings-div">
          <p>
            {movie.show.schedule.days[0]
              ? movie.show.schedule.days[0]
              : "Monday"}
          </p>
          <p>{movie.show.schedule.time ? movie.show.schedule.time : "14:00"}</p>
        </div>

        <NavLink to={link}>
          <div className="book-tickets-btn">Book Ticket</div>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
