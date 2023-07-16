import GameIcon from "@/components/icons/game-icon";
import Avatar from "@/components/avatar";

interface PlayerCardProps {
  playerName: string;
  playerNumber: number;
  avatar: string;
  wins: number;
  losses: number;
  draws: number;
}

export default function PlayerCard({
  playerName,
  playerNumber,
  avatar,
  wins = 0,
  losses = 0,
  draws = 0
}: PlayerCardProps) {
  return (
    <div className="text-white bg-opacity-20 bg-[#A076F9] h-[200px] px-5 py-7 rounded w-[80%] flex flex-row">
      <div className="mx-1">
        <Avatar link={avatar} />
      </div>
      <div className="ml-4">
        <h6 className="font-semibold text-white text-xl my-1">{playerName}</h6>
        <div className="flex flex-row align-center my-2">
          <GameIcon />
          <p className="italic text-white text-xs mx-2">
            Player {playerNumber}
          </p>
        </div>
        <div className="flex flex-row align-center justify-between">
          <div className="mr-1 w-[80px]">
            <p className="mt-3 font-semibold text-sm tracking-wide my-1">Wins</p>
            <p className="text-xl font-bold ">{wins}</p>
          </div>
          <div className="mx-1 w-[80px]">
            <p className="mt-3 font-semibold text-sm tracking-wide my-1">Losses</p>
            <p className="text-xl font-bold">{losses}</p>
          </div>
          <div className="mx-1 w-[80px]">
            <p className="mt-3 font-semibold text-sm tracking-wide my-1">Draws</p>
            <p className="text-xl font-bold ">{draws}</p>
          </div>   
        </div>
      </div>
    </div>
  );
}
