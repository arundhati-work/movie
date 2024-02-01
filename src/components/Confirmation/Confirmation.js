import React, { useEffect, useState } from "react";
import "./Confirmation.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NoImgAvl from "../../assets/NoImgAvl.png";

export default function Confirmation(props) {
  const { movies, loading, error } = useSelector((state) => state.movie);
  const movie = movies.find((m) => m.show.id === parseInt(props.id));
  const seatType =
    props.chairName === "Classic"
      ? "C"
      : props.chairName === "Executive"
      ? "E"
      : "P";
  var seats = seatType + "1";
  const [seatNumbers, setSeatNumbers] = useState(seats);

  var count;
  useEffect(() => {
    count = 1;
    if (props.tickets > 1) {
      while (count < props.tickets) {
        count++;
        seats = seats + ", " + seatType + count;
      }
    }
    setSeatNumbers(seats);
  }, [props.tickets, props.chairName]);

  if (loading) {
    return (
      <div className="modal">
        <div className="confirmation-component"><div className="loading-div"><h1>Loading...</h1></div></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modal">
        <div className="confirmation-component">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="modal">
      <div id="confirmation-component">
        <div className="confirm-title">
          <h1>BOOKING CONFIRMED</h1>
          <p className="gallery-link"><NavLink to="/"> &lt; Back to  Gallery</NavLink></p>
        </div>

        <div className="title-div">
          <div className="image-div">
            <img
              className="movie-poster"
              src={movie.show.image ? movie.show.image.medium : NoImgAvl}
              alt={movie.show.name}
            />
          </div>
          <div className="text-div">
            <p className="movie-title">{movie.show.name}</p>
            <p>
              {movie.show.schedule.days[0]
                ? movie.show.schedule.days[0]
                : "Monday"}{" "}
              | 30 Feb, 24
            </p>
            <p>
              {movie.show.schedule.time ? movie.show.schedule.time : "14:00"}
            </p>
          </div>
        </div>
        <div className="ticket-info-div">
          <p>{props.tickets} Ticket(s)</p>
          <p className="audi-info">AUDI 01</p>
          <p className="audi-info">
            {props.chairName} - {seatNumbers}
          </p>
        </div>

        <div className="amount-div">
          <p>Total Amount</p>
          <p>Rs. {props.amount}</p>
        </div>
      </div>
    </div>
  );
}
