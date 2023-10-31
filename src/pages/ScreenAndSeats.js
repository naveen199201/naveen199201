import React from 'react';

function ScreenAndSeats({ selectedSeats }) {
  // Define the number of rows and columns
  const numRows = 26; // A to Z
  const numColumns = 10; // 1 to 10

  // Function to generate the grid of seats
  const generateSeatsGrid = () => {
    const seatsGrid = [];

    // Generate row labels (A to Z)
    const rowLabels = Array.from({ length: numRows }, (_, index) =>
      String.fromCharCode(65 + index)
    );

    for (let row = 0; row < numRows; row++) {
      const rowSeats = [];
      for (let column = 1; column <= numColumns; column++) {
        const seatLabel = `${rowLabels[row]}${column}`;
        const isSelected = selectedSeats.includes(seatLabel);

        rowSeats.push(
          <div
            key={seatLabel}
            className={`seat ${isSelected ? 'selected' : ''}`}
          >
            {seatLabel}
          </div>
        );
      }
      seatsGrid.push(
        <div key={row} className="seat-row">
          {rowSeats}
        </div>
      );
    }

    // Generate column numbers (1 to 10)
    const columnNumbers = Array.from({ length: numColumns }, (_, index) =>
      index + 1
    );

    // Create a header row for column numbers
    const columnHeaders = columnNumbers.map((colNumber) => (
      <div key={`col-${colNumber}`} className="seat-header">
        {colNumber}
      </div>
    ));

    return (
      <div>
        <div className="seat-row">{columnHeaders}</div>
        {seatsGrid}
      </div>
    );
  };

  return (
    <div className="screen-and-seats">
      <div className="screen">Screen</div>
      <div className="seats-grid">{generateSeatsGrid()}</div>
    </div>
  );
}

export default ScreenAndSeats;
