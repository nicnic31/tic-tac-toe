import ModalContainer from "@/components/modal/container";
import Navbar from "@/components/navbar";
import {Toaster} from 'react-hot-toast';

function TicTacToeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full py-2 px-8">
      <Navbar />
      {children}
      <ModalContainer />
      <Toaster />
    </div>
  );
}

export default TicTacToeLayout;
