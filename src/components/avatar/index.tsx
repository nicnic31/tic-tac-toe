interface AvatarProps {
  link: string;
  width?: number;
  height?: number;
}
export default function Avatar({ link, width = 80, height = 80 }: AvatarProps) {
  return (
    <img
      src={
        link !== "" || link
          ? link
          : '/assets/logo.png'
      }
      alt="avatar"
      width={width}
      height={height}
      className="bg-[#DDDDDD] rounded-full object-contain"
    />
  );
}
