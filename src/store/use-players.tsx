import { create } from "zustand";

interface PlayersDetails {
  playerOneName: string;
  setPlayerOneName: (playerOneName: string) => void;
  playerOneAvatar: string;
  setPlayerOneAvatar: (playerOneAvatar: string) => void;
  playerOneID: string;
  playerOneDisable: boolean;
  setPlayerOne: (playerOneID: string) => void;
  playerTwoName: string;
  setPlayerTwoName: (playerTwoName: string) => void;
  playerTwoAvatar: string;
  setPlayerTwoAvatar: (playerTwoAvatar: string) => void;
  playerTwoID: string;
  playerTwoDisable: boolean;
  setPlayerTwo: (playerTwoID: string) => void;
  //   setPlayerTwo: (playerTwoName: string, playerTwoAvatar: string) => void;
}

export const usePlayer = create<PlayersDetails>((set) => ({
  playerOneName: "",
  setPlayerOneName: (playerOneName: string) =>
    set((state) => ({ ...state, playerOneName })),
  playerOneAvatar: "",
  setPlayerOneAvatar: (playerOneAvatar: string) =>
    set((state) => ({ ...state, playerOneAvatar })),
  playerOneID: "",
  playerOneDisable: false,
  setPlayerOne: (playerOneID: string) =>
    set((state) => ({ ...state, playerOneID, playerOneDisable: true })),
  playerTwoName: "",
  setPlayerTwoName: (playerTwoName: string) =>
    set((state) => ({ ...state, playerTwoName })),
  playerTwoAvatar: "",
  setPlayerTwoAvatar: (playerTwoAvatar: string) =>
    set((state) => ({ ...state, playerTwoAvatar })),
  playerTwoID: "",
  playerTwoDisable: false,
  setPlayerTwo: (playerTwoID: string) =>
    set((state) => ({ ...state, playerTwoID, playerTwoDisable: true })),
}));
