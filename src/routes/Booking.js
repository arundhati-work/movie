import React, {useState} from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Chairs from '../components/Chairs/Chairs';



export default function Booking() {
  const { id } = useParams();
  const { movies, loading, error } = useSelector((state) => state.movie);
  const movie = movies.find((m) => m.show.id === parseInt(id));
  const [chairName, setChairName] = useState('');
  const [chairPrice, setChairPrice] = useState(0);
  const [tickets, setTickets] = useState(1);
  const [totalAmount, setTotalAmount] = useState(200);

  const selectedChair = (chair) => {
    setChairName(chair.name);
    setChairPrice(chair.price);
    setTotalAmount((prevTotal) => chair.price*tickets);
  }

  const inputOnChange = (e) => {
    const newTickets = parseInt(e.target.value, 10);
    setTickets(newTickets);
    setTotalAmount(newTickets*chairPrice);
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header/>
      <p>Movie {movie.show.name}</p>
      <p>No. of tickets</p>
      <input type='number' value={tickets} onChange={(e)=>inputOnChange(e)}/>
      <Chairs selection={(chair)=>selectedChair(chair)}/>
      <p>Total Amount: {totalAmount}</p>
      <div>Continue to Payment</div>
      <Footer/>
    </div>
  )
}
