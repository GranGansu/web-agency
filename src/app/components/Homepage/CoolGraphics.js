import Image from "next/image";

export default function CoolGraphics() {
  return <div className='aspect-square max-w-xl rounded-xl bg-blue-900 backdrop-blur-sm opacity-80 flex flex-col'>
<Image width={500} height={200} alt="" src='/img/member.png'></Image>
<div className="flex"></div>
  </div>;
}
