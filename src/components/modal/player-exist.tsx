import { usePlayer } from "@/store/use-players";
import { useModal } from "@/components/modal/context";
import axios from "axios";
import { toast } from "react-hot-toast";
import Button from "@/components/Button";

export default function PlayerExist() {
  const { item, closeModal } = useModal((state) => ({
    item: state.item,
    closeModal: state.closeModal,
  }));

  const {
    setPlayerOneName,
    setPlayerOneAvatar,
    setPlayerTwoName,
    setPlayerTwoAvatar,
    setPlayerOne,
    setPlayerTwo,
  } = usePlayer((state) => ({
    setPlayerOneName: state.setPlayerOneName,
    setPlayerOneAvatar: state.setPlayerOneAvatar,
    setPlayerTwoName: state.setPlayerTwoName,
    setPlayerTwoAvatar: state.setPlayerTwoAvatar,
    setPlayerOne: state.setPlayerOne,
    setPlayerTwo: state.setPlayerTwo,
  }));

  const handleNoBtn = () => {
    if (item.playerNumber === 1) {
      setPlayerOneName("");
      setPlayerOneAvatar("");
      closeModal();
    } else {
      setPlayerTwoName("");
      setPlayerTwoAvatar("");
      closeModal();
    }
  };

  const handleYesBtn = async () => {
    if (item.playerNumber === 1) {
      try {
        const result = await axios.get(
          `http://localhost:3001/players/${item.name.toLowerCase()}`
        );
        setPlayerOne(result.data.id);
        closeModal();
      } catch (e) {
        toast.error(`${e}`);
      }
    } else {
      try {
        const result = await axios.get(
          `http://localhost:3001/players/${item.name.toLowerCase()}`
        );
        setPlayerTwo(result.data.id);
        closeModal();
      } catch (e) {
        toast.error(`${e}`);
      }
    }
  };

  return (
    <div className="bg-white w-[500px] rounded py-9 px-5 text-center">
      <p className="font-semibold tracking-wide mt-2 mb-5">
        Do you want to use {item.name} player?
      </p>
      <div className="flex flex-row justify-center">
        <div className="w-[70px] mx-2">
          <Button btnColor="error" onClick={handleNoBtn}>
            No
          </Button>
        </div>
        <div className="w-[70px] mx-2">
          <Button onClick={handleYesBtn}>Yes</Button>
        </div>
      </div>
    </div>
  );
}
