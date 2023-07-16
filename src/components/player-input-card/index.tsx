import Avatar from "@/components/avatar";
import { avatars } from "@/utils/avatars";

interface PlayerInputCardProps {
  placeholder: string;
  selectedAvatar: string;
  handlePlayerName: (name: string) => void;
  handleAvatar: (link: string) => void;
}

export default function PlayerInputCard({
  placeholder,
  selectedAvatar,
  handlePlayerName,
  handleAvatar
}: PlayerInputCardProps) {
  return (
    <div className="bg-opacity-20 bg-[#A076F9] text-sm text-white w-[400px] py-8 px-4 rounded">
      <div className="flex flex-row justify-center">
        <Avatar link={selectedAvatar} />
      </div>
      <input
        className="text-sm border-b-2 border-solid border-[#9DB2BF] w-full text-center pt-4 pb-2 focus:outline-none mt-3 bg-transparent"
        placeholder={placeholder}
        onChange={(e) => handlePlayerName(e.target.value)}
      />
      <div className="mt-5">
        <p className="font-bold tracking-wider my-2">Choose your avatar:</p>
        <div className="outline outline-1 outline-[#9DB2BF] rounded grid grid-cols-4 gap-4 py-4 px-2">
          {avatars.map((avatar, idx) => (
            <button
              key={idx}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={() => handleAvatar(avatar)}
            >
              <Avatar link={avatar} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
