import { create } from "zustand";

type ModalView = "GAME_STATUS" | "PLAYER_EXIST" | "DEFAULT";

interface IModal {
  isOpen: boolean;
  view: ModalView;
  item: any;
  openModal: (view: ModalView, item: any) => void;
  closeModal: () => void;
}

export const useModal = create<IModal>((set) => ({
  isOpen: false,
  view: "DEFAULT",
  item: null,
  openModal: (view: ModalView, item: any) =>
    set((state) => ({ ...state, isOpen: true, view, item })),
 closeModal:  () => set((state) => ({ ...state, isOpen: false }))
}));
