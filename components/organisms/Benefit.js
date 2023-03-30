import Image from "next/image";

export default function Benefit({ title, image, children }) {
  return (
    <div className="flex flex-col  border-b-2 border-gray-400 w-fit pl-8 text-left">
    {/* <Image alt="" className="opacity-70" width="80" height="80" src={`/img/${image}.png`}></Image> */}
      <h1 className="text-4xl text-white">{title}</h1>
      <p className="text-gray-400">{children}</p>
    </div>
  );
}
