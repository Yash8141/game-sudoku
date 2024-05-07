import Navbar from './component/navbar';
import ActionBar from './component/actionbar';
import Game from './component/game';
import SudokuProvider from './component/helper/context/sudokucontext';
import './App.css';

function App() {
  return (
    <SudokuProvider>
      <Navbar />
      <ActionBar />
      <Game />
    </SudokuProvider>
  );
}

export default App;