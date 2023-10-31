// BookNowScreen.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookSeat, selectSeat } from '../redux/action';
import './seats.css'
// import { useState } from 'react';
// import { bookSeat } from './bookSeat';
// import { selectSeat } from './selectSeat';

function Seats() {
 
  const seatsData = useSelector((state) => state.bookSeatReducer.seatsData);
  console.log(seatsData);
  const selectedSeats = useSelector((state) => state.selectSeatReducer.selectedSeats);
  const dispatch = useDispatch();

  const handleSeatClick = (seatId) => {
    console.log(`Clicked seat ${seatId}`);
    const seat = seatsData.find((seat) => seat.id === seatId);

    if (seat && !seat.isBooked && !selectedSeats.includes(seatId)) {
      const updatedSelectedSeats = [...selectedSeats, seatId];
      dispatch(selectSeat(updatedSelectedSeats));
    }
  };

  const handleBookSelectedSeats = () => {
    selectedSeats.forEach((seatId) => {
      dispatch(bookSeat(seatId));
    });

    // You can access the updated seat data from the Redux store
    // console.log('Updated Seats:', seatsData);
  };

  return (
    <div className="book-now-screen">
      <h2>Book Now</h2>
      <div className="seating-plan">
        {seatsData.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.isBooked ? 'booked' : ''} ${
              selectedSeats.includes(seat.id) ? 'selected' : ''
            }`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>
      <button onClick={handleBookSelectedSeats}>Book Selected Seats</button>
    </div>
  );
}

export default Seats;
