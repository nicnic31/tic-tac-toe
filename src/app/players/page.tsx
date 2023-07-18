"use client";

import { useRouter } from "next/navigation";
import { usePlayer } from "@/store/use-players";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useModal } from "@/components/modal/context";
import TicTacToeLayout from "@/layout/tic-tac-toe-layout";
import PlayerInputCard from "@/components/player-input-card";
import Button from "@/components/Button";

export default function PlayersScreen() {
  const router = useRouter();
  const {
    playerOne,
    playerOneDisable,
    playerOneID,
    playerTwo,
    playerTwoDisable,
    playerTwoID,
    setPlayerOneName,
    setPlayerOneAvatar,
    setPlayerOneID,
    setPlayerTwoName,
    setPlayerTwoAvatar,
    setPlayerTwoID,
  } = usePlayer((state) => ({
    playerOne: state.playerOne,
    playerOneDisable: state.playerOneDisable,
    playerOneID: state.playerOneID,
    playerTwo: state.playerTwo,
    playerTwoDisable: state.playerTwoDisable,
    playerTwoID: state.playerTwoID,
    setPlayerOneName: state.setPlayerOneName,
    setPlayerOneAvatar: state.setPlayerOneAvatar,
    setPlayerOneID: state.setPlayerOneID,
    setPlayerTwoName: state.setPlayerTwoName,
    setPlayerTwoAvatar: state.setPlayerTwoAvatar,
    setPlayerTwoID: state.setPlayerTwoID,
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
        playerOne.name !== "" &&
        playerOne.avatar !== "" &&
        playerOne.name !== playerTwo.name
      ) {
        const result = await axios.post(
          "http://localhost:3001/players/create",
          {
            name: playerOne.name.toLowerCase(),
            avatar: playerOne.avatar,
          }
        );
        setPlayerOneID(result.data.id);
        toast.success("Successfully created player one!");
      } else {
        toast.error("Complete player one information");
      }
    } catch (e: any) {
      setPlayerOneID(e.response.data.id);
      toast.error(e.response.data.message);
      openModal("PLAYER_EXIST", { name: playerOne.name, playerNumber: 1 });
    }
  };

  const handlePlayer2Details = async () => {
    try {
      if (
        playerTwo.name !== "" &&
        playerTwo.avatar !== "" &&
        playerOne.name !== playerTwo.name
      ) {
        const result = await axios.post(
          "http://localhost:3001/players/create",
          {
            name: playerTwo.name.toLowerCase(),
            avatar: playerTwo.avatar,
          }
        );
        setPlayerTwoID(result.data.id);
        toast.success("Successfully created player two!");
      } else {
        toast.error("Complete player two information");
      }
    } catch (e: any) {
      setPlayerTwoID(e.response.data.id);
      toast.error(e.response.data.message);
      openModal("PLAYER_EXIST", { name: playerTwo.name, playerNumber: 2 });
    }
  };

  console.log("playerOneID", playerOneID);
  console.log("playerTwoID", playerTwoID);

  return (
    <TicTacToeLayout>
      <div className="grid grid-cols-2 py-3">
        <div className="flex flex-row justify-center">
          <PlayerInputCard
            name={playerOne.name}
            placeholder="Enter your name, player one"
            selectedAvatar={playerOne.avatar}
            isDisable={playerOneDisable}
            handlePlayerName={handlePlayer1Name}
            handleAvatar={handlePlayer1Avatar}
            handleSubmit={handlePlayer1Details}
          />
        </div>
        <div className="flex flex-row justify-center">
          <PlayerInputCard
            name={playerTwo.name}
            placeholder="Enter your name, player two"
            selectedAvatar={playerTwo.avatar}
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
