import { ButtonHTMLAttributes } from "react";

type ButtonColor = "success" | "error" | "default";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
  btnColor?: string;
}

const getColor = (type: string) => {
  if (type === "success") {
    return "#7AA874";
  } else if (type === "error") {
    return "#FE0000";
  } else {
    return "#30A2FF";
  }
};

export default function Button({
  children,
  width = "full",
  btnColor = "#30A2FF",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full bg-[#FE0000] text-white py-4 px-2 rounded font-semibold tracking-wider text-sm`}
      {...props}
    >
      {children}
    </button>
  );
}
