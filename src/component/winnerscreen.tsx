import React, { useContext } from 'react';
import { SudokuContext } from './helper/context/sudokucontext';
import { randomBoard } from './helper/board-generator';
import Confetti from './confetti';
import Modal from './modal';

interface IWinnerScreen {
  open: any;
  setOpen: any;
}

const WinnerScreen = ({ open, setOpen }: IWinnerScreen) => {
  const { setWinningBoard } = useContext(SudokuContext);

  const startNewGame = () => {
    if (open) {
      setWinningBoard(randomBoard());
    }

    toggleModal();
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <Modal>
      <Confetti />
      <div className="winner-screen-container">
        <div className="x-button" onClick={toggleModal}>
          x
        </div>
        <h1>CONGRATULATIONS WINNER!</h1>
        <p>You did it! You should pat yourself on the back champ!</p>
        {/* Icon from: "https://www.flaticon.com/free-icons/medal" */}
        <img
          className="ribbon-img"
          alt="winner-ribbon"
          src="images/ribbon.png"
          width={150}
        />
        <button className="new-game-button" onClick={startNewGame}>
          New Game
        </button>
      </div>
    </Modal>
  );
};

export default WinnerScreen;