import { useModal } from "./context";
import Image from "next/image";
import Button from "@/components/Button";

const displayImage = (status: string) => {
    if(status === 'wins') {
        return "/assets/celebration-emoji.png"
    }
    return "/assets/sad-emoji.png"
}

export default function GameStatusModal() {
  const { item, closeModal } = useModal((state) => ({
    item: state.item,
    closeModal: state.closeModal,
  }));
  return (
    <div className="bg-white w-[500px] rounded py-7 px-5 text-center">
      <div className="flex flex-row justify-center mb-2">
        <Image
          src={displayImage(item.status)}
          alt="emoji"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <p className="mt-5 font-semibold">
       {item.message}
      </p>
      <div className="flex flex-row justify-center align-center mt-7">
        <div className="mr-2 w-[100px]">
          <Button onClick={closeModal}>Close</Button>
        </div>
      </div>
    </div>
  );
}
