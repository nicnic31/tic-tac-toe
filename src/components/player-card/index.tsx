import GameIcon from "@/components/icons/game-icon";
import Avatar from "@/components/avatar";

interface PlayerCardProps {
  playerName: string;
  score: number;
  playerNumber: number;
  avatar: string;
}

export default function PlayerCard({playerName, score = 0, playerNumber, avatar}: PlayerCardProps) {
  return (
    <div className="text-white bg-opacity-20 bg-[#A076F9] h-[200px] px-5 py-7 rounded w-[80%] flex flex-row">
      <div className="mx-1">
        <Avatar link={avatar} />
      </div>
      <div className="ml-4">
        <h6 className="font-semibold text-white text-xl my-1">
          {playerName}
        </h6>
        <div className="flex flex-row align-center my-2">
          <GameIcon />
          <p className="italic text-white text-xs mx-2">Player {playerNumber}</p>
        </div>
        <p className="mt-3 font-semibold text-sm tracking-wide">Score:</p>
        <p className="text-xl font-bold ">{score}</p>
      </div>
    </div>
  );
}
