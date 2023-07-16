"use client";
import TicTacToeTable from "@/components/tic-tac-toe-table";
import { useState, useEffect } from "react";
import { Cells } from "@/components/tic-tac-toe-table";
import TicTacToeLayout from "@/layout/tic-tac-toe-layout";
import PlayerCard from "@/components/player-card";
import Button from "@/components/Button";
import PlayerOneDetailsModal from "@/components/modal/player-one-details-modal";

export default function NewGameScreen() {
  const [cells, setCells] = useState<Array<Cells>>(
    Array(9).fill({
      symbol: "",
      isDisabled: false,
    })
  );

  const [winningMessage, setWinningMessage] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("cross");
  const [player1, setPlayer1] = useState({
    playerOneName: "",
    avatar: "",
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    playerTwoName: "",
    avatar: "",
    score: 0,
  });
  const [openPlayer1Modal, setOpenPlayer1Modal] = useState(true);
  const [openPlayer2Modal, setOpenPlayer2Modal] = useState(false);

  const handlePlayerOneName = (e: any) => {
    setPlayer1((prev) => ({ ...prev, playerOneName: e.target.value }));
  };

  const handlePlayerOneAvatar = (link: string) => {
    setPlayer1((prev) => ({ ...prev, avatar: link }));
  };

  const handleCell = (cellIndex: number) => {
    console.log("got clicked cell #", cellIndex);
    const storage = [...cells];
    if (symbol === "cross") {
      storage[cellIndex] = {
        symbol: symbol,
        isDisabled: true,
      };
      setCells(storage);
      setSymbol("circle");
    } else {
      storage[cellIndex] = {
        symbol: symbol,
        isDisabled: true,
      };
      setCells(storage);
      setSymbol("cross");
    }
  };

  const resetCellsSymbol = () => {
    setTimeout(() => {
      setCells(
        Array(9).fill({
          symbol: "",
          isDisabled: false,
        })
      );
      setSymbol("cross");
      setWinningMessage("");
    }, 2000);
  };

  const disableAllCells = () => {
    cells.forEach((cell) => (cell.isDisabled = true));
  };

  const handleCheckWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    winningCombinations.forEach((combination) => {
      const circleWins = combination.every(
        (number) => cells[number].symbol === "circle"
      );

      if (circleWins) {
        setWinningMessage("Circle player wins!");
        setPlayer2((prev) => ({...prev, score: prev.score + 1}))
        disableAllCells();
        resetCellsSymbol();
        return;
      }
    });

    winningCombinations.forEach((combination) => {
      const crossWins = combination.every(
        (number) => cells[number].symbol === "cross"
      );

      if (crossWins) {
        setWinningMessage("Cross player wins!");
        setPlayer1((prev) => ({...prev, score: prev.score + 1}))
        disableAllCells();
        resetCellsSymbol();
        return;
      }
    });
  };

  console.log("player 2", player2)
  useEffect(() => {
    handleCheckWinner();
  }, [cells]);

  return (
    <TicTacToeLayout>
      <div className="grid grid-cols-3 gap-1">
        <PlayerCard
          avatar={player1.avatar}
          playerName={player1.playerOneName}
          playerNumber={1}
          score={player1.score}
        />
        <div className="w-full">
          <TicTacToeTable
            cells={cells}
            message={winningMessage}
            handleCell={handleCell}
          />
          <div className="text-center">
            <Button btnColor="error">Stop</Button>
          </div>
        </div>
        <PlayerCard
          playerName={player2.playerTwoName}
          playerNumber={2}
          score={player2.score}
          avatar={player2.avatar}
        />
      </div>
      <PlayerOneDetailsModal
        isOpen={openPlayer1Modal}
        handleCloseModal={() => setOpenPlayer1Modal(false)}
        handleInput={handlePlayerOneName}
        handleAvatar={handlePlayerOneAvatar}
        playerNumber="one"
      />
      <PlayerOneDetailsModal
        isOpen={openPlayer2Modal}
        handleCloseModal={() => setOpenPlayer2Modal(false)}
        handleInput={handlePlayerOneName}
        handleAvatar={handlePlayerOneAvatar}
        playerNumber="two"
      />
    </TicTacToeLayout>
  );
}
