"use client";
import CircleIcon from "@/components/icons/circle-icon";
import CrossIcon from "@/components/icons/cross-icon";
import { useState, useEffect } from "react";

export type Cells = {
  symbol: string;
  isDisabled: boolean;
};

interface TicTacToeTableProps {
  cells: Array<Cells>;
  message: string;
  handleCell: (cellIndex: number) => void;
}

const displaySymbol = (symbol: string) => {
  switch (symbol) {
    case "cross":
      return <CrossIcon />;
    case "circle":
      return <CircleIcon />;
    default:
      return "";
  }
};

export default function TicTacToeTable({
  cells,
  message,
  handleCell,
}: TicTacToeTableProps) {
  return (
    <div className="flex flex-col w-full align-center justify-center p-2 text-rose-500">
      <div className=" bg-opacity-20 bg-[#A076F9] grid grid-cols-3 w-[400px] h-[400px]">
        {cells.map((cell, idx) => (
          <button
            key={idx}
            className="border border-solid border-white text-center h-full"
            disabled={cell.isDisabled}
            onClick={() => handleCell(idx)}
          >
            <div className="h-[100px] flex flex-col justify-center ease-in-out duration-75">
              {displaySymbol(cell.symbol)}
            </div>
          </button>
        ))}
      </div>
      <p className="my-2">{message}</p>
    </div>
  );
}
