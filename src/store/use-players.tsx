import { create } from "zustand";

type PlayerOneDetails = {
  name: string;
  avatar: string;
};

type PlayerTwoDetails = {
  name: string;
  avatar: string;
};

interface IPlayers {
  playerOne: PlayerOneDetails;
  playerOneID: string;
  playerOneDisable: boolean;
  setPlayerOneName: (name: string) => void;
  setPlayerOneAvatar: (avatar: string) => void;
  setPlayerOneID: (id: string) => void;
  playerTwo: PlayerTwoDetails;
  playerTwoID: string;
  playerTwoDisable: boolean;
  setPlayerTwoName: (name: string) => void;
  setPlayerTwoAvatar: (avatar: string) => void;
  setPlayerTwoID: (id: string) => void;
}

export const usePlayer = create<IPlayers>((set) => ({
  playerOne: {
    name: "",
    avatar: "",
  },
  playerOneID: "",
  playerOneDisable: false,
  setPlayerOneName: (name: string) =>
    set((state) => ({ ...state, playerOne: { ...state.playerOne, name } })),
  setPlayerOneAvatar: (avatar: string) =>
    set((state) => ({ ...state, playerOne: { ...state.playerOne, avatar } })),
  setPlayerOneID: (id: string) =>
    set((state) => ({ ...state, playerOneID: id, playerOneDisable: true })),
  playerTwo: {
    name: "",
    avatar: "",
  },
  playerTwoID: "",
  playerTwoDisable: false,
  setPlayerTwoName: (name: string) =>
    set((state) => ({ ...state, playerTwo: { ...state.playerTwo, name } })),
  setPlayerTwoAvatar: (avatar: string) =>
    set((state) => ({ ...state, playerTwo: { ...state.playerTwo, avatar } })),
  setPlayerTwoID: (id: string) =>
    set((state) => ({ ...state, playerTwoID: id, playerTwoDisable: true })),
}));
