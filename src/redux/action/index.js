
export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';

// Async action creator using Redux Thunk
export const setInputvalue = (inputValue) => {
  return (dispatch) => {
    // Perform async logic here if needed
    // For example, you can make an API call or use setTimeout
    // Once the async logic is done, dispatch the action

    // For simplicity, we dispatch the action immediately
    dispatch({
      type: "SET_INPUT_TEXT",
      payload: inputValue,
    });
  };
};


export const selectSeat = (seatIds) => ({
  type: 'TOGGLE_SELECT_SEAT',
  payload: seatIds,
});

// bookSeat.js

export const bookSeat = (seatId) => ({
  type: 'BOOK_SEAT',
  payload: seatId,
});

export const booktoseat = (seatId) =>({
  type: 'BOOK_TO_SEAT',
  payload: seatId,
})

export const clearSeats = () =>({
  type: 'CLEAR_SEATS',
})