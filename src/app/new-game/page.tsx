"use client";
import TicTacToeTable from "@/components/tic-tac-toe-table";
import { useState, useEffect } from "react";
import { Cells } from "@/components/tic-tac-toe-table";
import TicTacToeLayout from "@/layout/tic-tac-toe-layout";
import PlayerCard from "@/components/player-card";
import Button from "@/components/Button";

export default function NewGameScreen() {
  const [cells, setCells] = useState<Array<Cells>>(
    Array(9).fill({
      symbol: "",
      isDisabled: false,
    })
  );

  const [winningMessage, setWinningMessage] = useState<string>("");

  const [symbol, setSymbol] = useState<string>("cross");

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
        disableAllCells();
        resetCellsSymbol();
        return;
      }
    });
  };

  useEffect(() => {
    handleCheckWinner();
  }, [cells]);

  return (
    <TicTacToeLayout>
      <div className="grid grid-cols-3 gap-1">
        <PlayerCard
          avatar="https://api.dicebear.com/6.x/adventurer/svg?seed=Socks"
          playerName="Spongebob Squarepants"
          playerNumber={1}
          score={1}
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
          playerName="Jimmy Neutron"
          playerNumber={2}
          score={3}
          avatar="https://api.dicebear.com/6.x/adventurer/svg?seed=Mia"
        />
      </div>
    </TicTacToeLayout>
  );
}
