import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { avatars } from "../utils/avatars";
import Avatar from "@/components/avatar";
import Button from "@/components/Button";

export interface PlayerDetailsModal {
  isOpen: boolean;
  handleCloseModal: () => void;
  handleInput: (e: any) => void;
  handleAvatar: (link: string) => void;
  playerNumber: string;
}

export default function PlayerOneDetailsModal({
  isOpen,
  handleCloseModal,
  handleInput,
  handleAvatar,
  playerNumber
}: PlayerDetailsModal) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseModal}
      className="bg-white rounded absolute w-[500px] py-5 px-6 top-[20%] left-[25%] translate-y-[10%] translate-x-[25%]"
    >
      <Dialog.Panel>
        <Dialog.Title className="font-semibold text-xl my-2 text-center">
          Enter your name, player {playerNumber}
        </Dialog.Title>
        <Dialog.Description>
          <input
            type="text"
            className="border-b text-center mt-2 border-solid border-[#9DB2BF] w-full py-1 px-3 focus:outline-0"
            onChange={handleInput}
          />
          <p className="mt-5 text-sm">Choose your avatar</p>
          <div className="grid grid-cols-6 mt-5 mb-8">
            {avatars.map((avatar, idx) => (
              <button
                key={idx}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                onClick={() => handleAvatar(avatar)}
              >
                <Avatar link={avatar} width={50} height={50} />
              </button>
            ))}
          </div>

          <Button onClick={handleCloseModal}>Submit</Button>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
}
