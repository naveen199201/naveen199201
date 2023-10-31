// selectSeatReducer.js

const initialState = {
    selectedSeats: [], // Initialize selectedSeats as an array
  };
  
  const selectSeatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_SELECT_SEAT':
        const seatId = action.payload;
  
        // Check if the seat is already selected
        if (state.selectedSeats.includes(seatId)) {
          return {
            ...state,
            selectedSeats: state.selectedSeats.filter(
              (selectedSeat) => selectedSeat !== seatId
            ),
            
          };
        } else {
          return {
            ...state,
            selectedSeats: [...state.selectedSeats, seatId],
          };
        }
      default:
        return state;
    }
  };
  
  export default selectSeatReducer;
  