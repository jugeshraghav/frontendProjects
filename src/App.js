import "./App.css";
import { Carousel } from "./Projects/Carousel/Carousel";

import { TicTacToe } from "./Projects/TicTacToe/TicTacToe";

function App() {
  return (
    <div className="App">
      <TicTacToe />
      <Carousel />
    </div>
  );
}

export default App;
