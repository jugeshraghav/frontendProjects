import { useState } from "react";
import "./style.css";

export const Game = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);

  ///mark X or O on click - function
  const handleClick = (index) => {
    //early return if there exists a winner or if the cell already contains X or O
    if (squares[index]) return;

    //updating the squares array
    const squaresCopy = [...squares];
    if (isXnext) {
      squaresCopy[index] = "X";
    } else {
      squaresCopy[index] = "O";
    }
    setSquares(squaresCopy);
    setIsXnext(!isXnext);
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game">
        <div className="game-board">
          {squares.map((_, i) => (
            <button className="cell" onClick={() => handleClick(i)}>
              {squares[i]}
            </button>
          ))}
        </div>
        <div className="game-info">//info</div>
      </div>
    </>
  );
};
