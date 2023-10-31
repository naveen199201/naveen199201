import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookSeat, selectSeat, clearSeats } from '../redux/action';
import './seats.css';
import { useNavigate } from 'react-router-dom';
import Payments from './Payments';

function BookNowScreen() {
  const seatsData = useSelector((state) => state.bookSeatReducer.seatsData);
  const selectedSeats = useSelector((state) => state.selectSeatReducer.selectedSeats);
  // console.log(selectedSeats)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSeatClick = (seatId) => {
    const seat = seatsData.find((seat) => seat.id === seatId);

    if (seat) {
      if (seat.isBooked) {
        // Seat is already booked, can't be selected
        return;
      }
      // Toggle seat selection
      dispatch(selectSeat(seatId));
    }
  };
  
  const seatsToBook = selectedSeats.filter((seatId) => {
    const seat = seatsData.find((seat) => seat.id === seatId);
    return seat && !seat.isBooked;
  });
  console.log(seatsToBook)
  const bookingSeats = seatsToBook;
  console.log(bookingSeats);
  // Import necessary dependencies and components

  const handleBookSelectedSeats = () => {
    // Perform actions for each seat in seatsToBook
    bookingSeats.forEach((seatId) => {
      
      dispatch(bookSeat(seatId));
      console.log(seatsToBook);
      navigate("/payments");
    });

    dispatch(clearSeats());
    
  };
  return (

    <div className="book-now-screen m-30">
      <h2>Book Now</h2>
      <div className="seating-plan">
        {seatsData.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.isBooked ? 'booked' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''
              }`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>
      <button onClick={handleBookSelectedSeats}>Book Selected Seats</button>
      <Payments seatsToBook={seatsToBook} />
    </div>
  );
}

export default BookNowScreen;
