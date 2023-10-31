// bookSeatReducer.js

const initialState = {
    seatsData: [
      { id: 1, seatNumber: 'A1', isBooked: false },
      { id: 2, seatNumber: 'A2', isBooked: false },
      { id: 3, seatNumber: 'A3', isBooked: false },
      { id: 4, seatNumber: 'A4', isBooked: false },
      { id: 5, seatNumber: 'A5', isBooked: false },
      { id: 6, seatNumber: 'A6', isBooked: false },
      { id: 7, seatNumber: 'A7', isBooked: false },
      { id: 8, seatNumber: 'A8', isBooked: false },
      { id: 9, seatNumber: 'A9', isBooked: false },
      { id: 10, seatNumber: 'A10', isBooked: false },
      { id: 11, seatNumber: 'B1', isBooked: false },
      { id: 12, seatNumber: 'B2', isBooked: false },
      { id: 13, seatNumber: 'B3', isBooked: false },
      { id: 14, seatNumber: 'B4', isBooked: false },
      { id: 15, seatNumber: 'B5', isBooked: false },
      { id: 16, seatNumber: 'B6', isBooked: false },
      { id: 17, seatNumber: 'B7', isBooked: false },
      { id: 18, seatNumber: 'B8', isBooked: false },
      { id: 19, seatNumber: 'B9', isBooked: false },
      { id: 20, seatNumber: 'B10', isBooked: false },
      // Add more seat data here
    ],
    seats:[]
     
  };
  
  const bookSeatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOOK_SEAT':
        const seatss=[...state.seats];
        const seatIdToBook = action.payload;
        
        seatss.push(seatIdToBook)
        console.log(seatss);

  
        // Check if the seat is not already booked
        const seatToBook = state.seatsData.find((seat) => seat.id === seatIdToBook);

        if (seatToBook && !seatToBook.isBooked) {
          const updatedSeats = [...state.seats]; // Create a copy of the current seats array
          updatedSeats.push(seatToBook);
          
          
          const updatedSeatsData = state.seatsData.map((seat) =>
            seat.id === seatIdToBook ? { ...seat, isBooked: true } : seat
          );
  
          return {
            ...state,
            seatsData: updatedSeatsData,
            seats:updatedSeats,
            seatss
            
          };
        } else {
          return state; // Seat is already booked or doesn't exist
        }
      
       case 'CLEAR_SEATS':
          return {
            ...state,
            seats: [], // Clear the array by setting it to an empty array
          };
        // Handle other cases if needed
        default:
          return state;
    }
  };
  
  export default bookSeatReducer;
  