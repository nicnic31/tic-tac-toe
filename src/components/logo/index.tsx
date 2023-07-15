import Image
 from "next/image";
export default function Logo() {
  return (
    <div className="flex flex-row align-center">
      <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
      <p className="text-white font-semibold text-2xl py-2 mx-3 tracking-wide font-mono">
        tic-tac-toe
      </p>
    </div>
  );
}
