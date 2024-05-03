import { useState } from "react";
import "./style.css";

export const Game = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);

  ///mark X or O on click - function
  const handleClick = (index) => {
    //early return if there exists a winner or if the cell already contains X or O
    if (squares[index] || winner(squares)) return;

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
  //Winner
  const winnig_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const winner = (squares) => {
    let statement = "";
    winnig_patterns.forEach((ele) => {
      const [a, b, c] = ele;

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        statement = `The Winner is ${squares[a]}`;
      }
    });

    return statement;
  };
  //reset handler
  const resetHandler = () => {
    setSquares(new Array(9).fill(null));
    setIsXnext(truew);
  };

  //current status: players turn or winner
  let current_status = winner(squares)
    ? winner(squares)
    : isXnext
    ? "Next player is X"
    : "Next player is O";

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game-header">
        <h4 className="status">{current_status}</h4>
        <button onClick={resetHandler}>Reset</button>
      </div>

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
