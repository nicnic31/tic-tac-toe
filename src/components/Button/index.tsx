import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

type ButtonColor = "success" | "error" | "default";
type ButtonShape = "rounded" | "circle";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnWidth?: string;
  btnColor?: ButtonColor;
  btnShape?: ButtonShape;
  isLoading?: boolean;
}

const getColor = (type: string) => {
  if (type === "success") {
    return "bg-[#7AA874]";
  } else if (type === "error") {
    return "bg-[#FE0000]";
  } else {
    return "bg-[#30A2FF]";
  }
};

export default function Button({
  children,
  btnWidth,
  btnColor = 'default',
  btnShape = "rounded",
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "text-sm py-3 cursor-pointer px-2 text-center text-white font-semibold tracking-wider transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
        btnWidth ? `w-[${btnWidth}]` : "w-full",
        getColor(btnColor),
        btnShape === "rounded" ? "rounded" : "rounded-full"
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex flex-row justify-center">
          <img src="/assets/loader.gif" className="h-[20px]" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
