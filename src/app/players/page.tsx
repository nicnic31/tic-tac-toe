"use client";

import { useState } from "react";
import TicTacToeLayout from "@/layout/tic-tac-toe-layout";
import PlayerInputCard from "@/components/player-input-card";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function PlayersScreen() {
  const router = useRouter();
  const [player1, setPlayer1] = useState({
    name: "",
    avatar: "",
    score: 0,
  });

  const [player2, setPlayer2] = useState({
    name: "",
    avatar: "",
    score: 0,
  });

  const handlePlayer1Name = (name: string) => {
    setPlayer1((prev) => ({ ...prev, name }));
  };

  const handlePlayer2Name = (name: string) => {
    setPlayer2((prev) => ({ ...prev, name }));
  };

  const handlePlayer1Avatar = (avatar: string) => {
    setPlayer1((prev) => ({ ...prev, avatar }));
  };

  const handlePlayer2Avatar = (avatar: string) => {
    setPlayer2((prev) => ({ ...prev, avatar }));
  };

  const handleButton = () => {
    if(player1.name !== '' && player1.avatar !== '' && player2.name !== '' && player2.avatar !== ''){
        router.push(`/game/${1}`);
    } else {
        alert('Please complete the form');
    }
  }

  return (
    <TicTacToeLayout>
      <div className="grid grid-cols-2 py-3">
        <div className="flex flex-row justify-center">
          <PlayerInputCard
            placeholder="Enter your name, player one"
            selectedAvatar={player1.avatar}
            handlePlayerName={handlePlayer1Name}
            handleAvatar={handlePlayer1Avatar}
          />
        </div>
        <div className="flex flex-row justify-center">
          <PlayerInputCard
            placeholder="Enter your name, player two"
            selectedAvatar={player2.avatar}
            handlePlayerName={handlePlayer2Name}
            handleAvatar={handlePlayer2Avatar}
          />
        </div>
      </div>
      <div className="mt-9 text-center">
        <Button btnColor="success" btnWidth="400px" onClick={handleButton}>
          Let's get started
        </Button>
      </div>
    </TicTacToeLayout>
  );
}
