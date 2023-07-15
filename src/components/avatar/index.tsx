interface AvatarProps {
  link: string;
  width?: number;
  height?: number;
}
export default function Avatar({ link, width = 80, height = 80 }: AvatarProps) {
  return (
    <img
      src={
        link !== ''
          ? link
          : "https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
      }
      alt="avatar"
      width={width}
      height={height}
      className="bg-[#DDDDDD] rounded-full object-contain"
    />
  );
}
