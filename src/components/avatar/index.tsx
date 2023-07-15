export default function Avatar({link} : {link: string}) {
  return (
    <img
      src={link}
      alt="avatar"
      width={80}
      height={80}
      className="bg-[#DDDDDD] rounded-full object-contain"
    />
  );
}
