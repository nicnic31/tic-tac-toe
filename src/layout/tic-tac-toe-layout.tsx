import Navbar from "@/components/navbar";

function TicTacToeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full py-2 px-8">
      <Navbar />
      {children}
    </div>
  );
}

export default TicTacToeLayout;
