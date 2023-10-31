import React from 'react';
import { useSelector } from 'react-redux';

function Payments(props) {
  const seats = useSelector((state) => state.selectSeatReducer.selectedSeats);
  const seatsData = useSelector((state) => state.bookSeatReducer.seatsData);
  const seatss = useSelector((state) => state.bookSeatReducer.update);
  const seat=props.seatsToBook;
  // const seats=props.seatsToBook;
  const totalSeats = seats.length;
  console.log(seatss)
  console.log(seat)
  console.log(seats)
  

  // Create a function to map seat IDs to seat numbers
  const mapSeatIdToNumber = (seatId) => {
    const seat = seatsData.find((seat) => seat.id === seatId);
    return seat ? seat.seatNumber : 'Seat Not Found';
  };

  return (
    <div className="payments bg-info ">
      <h2 bg-primary>Payment Page</h2>
      <h3>Selected Seats:</h3>
      <ul>
        {seats.map((seatId) => (
          <li key={seatId}>{mapSeatIdToNumber(seatId)}</li>
        ))}
      </ul>
      <h6>Total Seats:{totalSeats}</h6>
      {/* Add payment process logic here */}
    </div>
  );
}

export default Payments;
