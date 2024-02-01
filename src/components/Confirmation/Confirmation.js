import React, {useEffect, useState} from "react";
import "./Confirmation.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NoImgAvl from "../../assets/NoImgAvl.png";

export default function Confirmation(props) {

    const { movies, loading, error } = useSelector((state) => state.movie);
  const movie = movies.find((m) => m.show.id === parseInt(props.id));
    const seatType = props.chairName === 'Classic'? 'C': props.chairName==='Executive'? 'E' : 'P';
  var seats = seatType+'1';
  const [seatNumbers, setSeatNumbers] = useState(seats);

    var count;
    useEffect(() => {
        count = 1;
        if (props.tickets>1){
            while(count<props.tickets){
                count++;
                seats = seats + ', ' + seatType + count;
            }
        }
        setSeatNumbers(seats);
    }, [props.tickets, props.chairName]);

    if (loading) {
        return <div className="modal"><div className="confirmation-component">Loading...</div></div>;
      }
    
      if (error) {
        return <div className="modal"><div className="confirmation-component">Error: {error}</div></div>;
      }

  return (
    <div className="modal">
      <div className="confirmation-component">
        <h1>BOOKING CONFIRMED</h1>
        <img src={movie.show.image ? movie.show.image.medium : NoImgAvl} alt={movie.show.name}/>
        <p>{movie.show.name}</p>
        <p>{movie.show.schedule.days[0]?movie.show.schedule.days[0] : 'Monday'}</p>
        <p>{movie.show.schedule.time?movie.show.schedule.time:'14:00'}</p>
        <p>{props.tickets} Ticket(s)</p>
        <p>AUDI 01</p>
        <p>{props.chairName} - {seatNumbers}</p>
        <p>Total Amount Rs. {props.amount}</p>
        <NavLink to="/">Back to Gallery</NavLink>
      </div>
    </div>
  );
}
