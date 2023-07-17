"use client";

import TicTacToeLayout from "@/layout/tic-tac-toe-layout";
import PlayerInputCard from "@/components/player-input-card";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/store/use-players";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useModal } from "@/components/modal/context";

export default function PlayersScreen() {
  const router = useRouter();
  const {
    playerOneName,
    playerOneAvatar,
    playerOneDisable,
    playerOneID,
    playerTwoName,
    playerTwoAvatar,
    playerTwoID,
    playerTwoDisable,
    setPlayerOneName,
    setPlayerOneAvatar,
    setPlayerOne,
    setPlayerTwoName,
    setPlayerTwoAvatar,
    setPlayerTwo,
  } = usePlayer((state) => ({
    playerOneName: state.playerOneName,
    playerOneAvatar: state.playerOneAvatar,
    playerOneDisable: state.playerOneDisable,
    playerOneID: state.playerOneID,
    playerTwoName: state.playerTwoName,
    playerTwoAvatar: state.playerTwoAvatar,
    playerTwoDisable: state.playerTwoDisable,
    playerTwoID: state.playerTwoID,
    setPlayerOneName: state.setPlayerOneName,
    setPlayerOneAvatar: state.setPlayerOneAvatar,
    setPlayerOne: state.setPlayerOne,
    setPlayerTwoName: state.setPlayerTwoName,
    setPlayerTwoAvatar: state.setPlayerTwoAvatar,
    setPlayerTwo: state.setPlayerTwo,
  }));

  const { openModal } = useModal((state) => ({ openModal: state.openModal }));

  const handlePlayer1Name = (name: string) => {
    setPlayerOneName(name);
  };

  const handlePlayer1Avatar = (avatar: string) => {
    setPlayerOneAvatar(avatar);
  };

  const handlePlayer2Name = (name: string) => {
    setPlayerTwoName(name);
  };

  const handlePlayer2Avatar = (avatar: string) => {
    setPlayerTwoAvatar(avatar);
  };

  const handlePlayer1Details = async () => {
    try {
      if (
        playerOneName !== "" &&
        playerOneAvatar !== "" &&
        playerOneName !== playerTwoName
      ) {
        const result = await axios.post(
          "http://localhost:3001/players/create",
          {
            name: playerOneName.toLowerCase(),
            avatar: playerOneAvatar,
          }
        );
        setPlayerOne(result.data.id);
        toast.success("Successfully created player one!");
      } else {
        toast.error("Complete player one information");
      }
    } catch (e: any) {
      toast.error(e.response.data.message);
      openModal("PLAYER_EXIST", { name: playerOneName, playerNumber: 1 });
    }
  };

  const handlePlayer2Details = async () => {
    try {
      if (
        playerTwoName !== "" &&
        playerTwoAvatar !== "" &&
        playerOneName !== playerTwoName
      ) {
        const result = await axios.post(
          "http://localhost:3001/players/create",
          {
            name: playerTwoName.toLowerCase(),
            avatar: playerTwoAvatar,
          }
        );
        setPlayerTwo(result.data.id);
        toast.success("Successfully created player two!");
      } else {
        toast.error("Complete player two information");
      }
    } catch (e: any) {
      toast.error(e.response.data.message);
      openModal("PLAYER_EXIST", { name: playerTwoName, playerNumber: 2 });
    }
  };

  return (
    <TicTacToeLayout>
      <div className="grid grid-cols-2 py-3">
        <div className="flex flex-row justify-center">
          <PlayerInputCard
            name={playerOneName}
            placeholder="Enter your name, player one"
            selectedAvatar={playerOneAvatar}
            isDisable={playerOneDisable}
            handlePlayerName={handlePlayer1Name}
            handleAvatar={handlePlayer1Avatar}
            handleSubmit={handlePlayer1Details}
          />
        </div>
        <div className="flex flex-row justify-center">
          <PlayerInputCard
            name={playerTwoName}
            placeholder="Enter your name, player two"
            selectedAvatar={playerTwoAvatar}
            isDisable={playerTwoDisable}
            handlePlayerName={handlePlayer2Name}
            handleAvatar={handlePlayer2Avatar}
            handleSubmit={handlePlayer2Details}
          />
        </div>
      </div>
      {playerOneID !== "" && playerTwoID !== "" && (
        <div className="mt-9 text-center">
          <Button
            btnColor="success"
            btnWidth="400px"
            onClick={() => router.push("/game")}
          >
            Start
          </Button>
        </div>
      )}
    </TicTacToeLayout>
  );
}
