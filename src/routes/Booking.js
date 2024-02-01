import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import "../styles/Booking.css";

import Chairs from "../components/Chairs/Chairs";
import Confirmation from "../components/Confirmation/Confirmation";

export default function Booking() {
  const { id } = useParams();
  const { movies, loading, error } = useSelector((state) => state.movie);
  const movie = movies.find((m) => m.show.id === parseInt(id));
  const [chairName, setChairName] = useState("");
  const [chairPrice, setChairPrice] = useState(200);
  const [tickets, setTickets] = useState(1);
  const [totalAmount, setTotalAmount] = useState(200);
  const [showModal, setShowModal] = useState(false);

  const selectedChair = (chair) => {
    setChairName(chair.name);
    setChairPrice(chair.price);
  };

  useEffect(() => {
    setTotalAmount(tickets * chairPrice);
  }, [tickets, chairPrice]);

  const inputOnChange = (e) => {
    const newTickets = parseInt(e.target.value, 10);
    setTickets(newTickets);
    setTotalAmount(newTickets * chairPrice);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="booking-component">
      <Header />
      <div className="title-div">
        <p>Movie</p> <span className="movie-title">{movie.show.name}</span>
      </div>
      <div className="tickets-div">
        <p>No. of tickets</p>
        <form>
        <input
          type="number"
          min="1"
          max="20"
          value={tickets}
          onChange={(e) => inputOnChange(e)}
        />
        </form>
      </div>
      <Chairs selection={(chair) => selectedChair(chair)} />
      <div className="total-div"><p className="total-amount">Total Amount: </p><p>{totalAmount}</p></div>
      <button className="payment-btn" onClick={() => setShowModal(true)}>Continue to Payment</button>
      {showModal &&
        createPortal(
          <Confirmation
            id={movie.show.id}
            chairName={chairName}
            tickets={tickets}
            amount={totalAmount}
          />,
          document.getElementById("modal-root")
        )}
      <Footer />
    </div>
  );
}
