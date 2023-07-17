"use client";
import { useState, useEffect } from "react";
import { Cells } from "@/components/tic-tac-toe-table";
import { useModal } from "@/components/modal/context";

import TicTacToeTable from "@/components/tic-tac-toe-table";
import TicTacToeLayout from "@/layout/tic-tac-toe-layout";
import PlayerCard from "@/components/player-card";
import Button from "@/components/Button";

type WinningCombinations = Array<Array<number>>;

const disableAllCells = (cells: Array<Cells>) => {
  cells.forEach((cell) => (cell.isDisabled = true));
};

const allCellFilledUp = (cells: Array<Cells>) => {
  return cells.every((cell) => cell.symbol !== "");
};

export default function NewGameScreen() {
  const { openModal } = useModal((state) => ({ openModal: state.openModal }));
  const [cells, setCells] = useState<Array<Cells>>(
    Array(9).fill({
      symbol: "",
      isDisabled: false,
    })
  );

  const [hasWinner, setHasWinner] = useState(false);
  const [symbol, setSymbol] = useState<string>("cross");
  const [player1, setPlayer1] = useState({
    playerOneName: "",
    avatar: "",
    wins: 0,
    losses: 0,
    draws: 0,
  });
  const [player2, setPlayer2] = useState({
    playerTwoName: "",
    avatar: "",
    wins: 0,
    losses: 0,
    draws: 0,
  });

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

  // reset the cell if the players want to continue the game
  const handleContinueGame = () => {
    setCells(
      Array(9).fill({
        symbol: "",
        isDisabled: false,
      })
    );
    setSymbol("cross");
    setHasWinner(false);
  };

  const handleStopGame = () => {

  }

  // checks if there is circle combinations
  const checkCircleCombinations = (
    winningCombinations: WinningCombinations
  ) => {
    winningCombinations.forEach((combination) => {
      const circleWins = combination.every(
        (number) => cells[number].symbol === "circle"
      );

      if (circleWins) {
        openModal("GAME_STATUS", {
          status: "wins",
          message: `Congratulations, ${player2.playerTwoName} win this round!`,
        });
        setHasWinner(true);
        setPlayer2((prev) => ({ ...prev, wins: prev.wins + 1 }));
        setPlayer1((prev) => ({ ...prev, losses: prev.losses + 1 }));
        disableAllCells(cells);
        return;
      }
    });
  };

  // checks if there is cross combinations
  const checkCrossCombinations = (winningCombinations: WinningCombinations) => {
    winningCombinations.forEach((combination) => {
      const crossWins = combination.every(
        (number) => cells[number].symbol === "cross"
      );

      if (crossWins) {
        openModal("GAME_STATUS", {
          status: "wins",
          message: `Congratulations, ${player1.playerOneName} win this round!`,
        });
        setHasWinner(true);
        setPlayer1((prev) => ({ ...prev, wins: prev.wins + 1 }));
        setPlayer2((prev) => ({ ...prev, losses: prev.losses + 1 }));
        disableAllCells(cells);
        return;
      }
    });
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

    checkCircleCombinations(winningCombinations);
    checkCrossCombinations(winningCombinations);
  };

  // triggers when all the cell is filled up and has no winner
  const draws = (isCellCompleted: boolean) => {
    if (isCellCompleted && !hasWinner) {
      setPlayer1((prev) => ({ ...prev, draws: prev.draws + 1 }));
      setPlayer2((prev) => ({ ...prev, draws: prev.draws + 1 }));
      setHasWinner(false);
      openModal("GAME_STATUS", {
        status: "draw",
        message: "No winner in this round.",
      });
    }
  };

  useEffect(() => {
    handleCheckWinner();
    const isCellCompleted = allCellFilledUp(cells);
    draws(isCellCompleted);
  }, [cells]);

  return (
    <TicTacToeLayout>
      <div className="grid grid-cols-3 gap-1 py-2">
        <PlayerCard
          avatar={player1.avatar}
          playerName={player1.playerOneName}
          playerNumber={1}
          wins={player1.wins}
          losses={player1.losses}
          draws={player1.draws}
        />
        <div className="w-full">
          <div className="px-[10%]">
            <TicTacToeTable cells={cells} handleCell={handleCell} />
          </div>

          {(hasWinner || allCellFilledUp(cells)) && (
            <div className="flex flex-row justify-center mt-8">
              <div className="w-[50%] mr-2">
                <Button
                  btnColor="error"
                  onClick={() => handleStopGame}
                >
                  Stop
                </Button>
              </div>
              <div className="w-[50%] ml-2">
                <Button
                  btnColor="success"
                  onClick={handleContinueGame}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-end">
          <PlayerCard
            playerName={player2.playerTwoName}
            playerNumber={2}
            avatar={player2.avatar}
            wins={player2.wins}
            losses={player2.losses}
            draws={player2.draws}
          />
        </div>
      </div>
    </TicTacToeLayout>
  );
}
