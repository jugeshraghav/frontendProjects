import { useState } from "react";
import "./style.css";

export const TicTacToe = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

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
    setHistory([...history, squaresCopy]);
    setIsXnext(!isXnext);
  };
  console.log(history);
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
    setIsXnext(true);
    setHistory([Array(9).fill(null)]);
  };

  //current status: players turn or winner
  let current_status = winner(squares)
    ? winner(squares)
    : isXnext
    ? "Next player is X"
    : "Next player is O";

  //move to history
  const moveToHistory = (step) => {
    setSquares(history[step]);
    setHistory(history.slice(0, step + 1));
    setIsXnext(step % 2 === 0);
  };
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
            <button key={i} className="cell" onClick={() => handleClick(i)}>
              {squares[i]}
            </button>
          ))}
        </div>
        <div className="game-info">
          {history.map((_, i) => (
            <button key={i} onClick={() => moveToHistory(i)}>
              Move to step {i}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
