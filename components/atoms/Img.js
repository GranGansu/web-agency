import Image from 'next/image';

export default function Img({ src, className = '', w = 500, h = 500 }) {
  return <Image className={className} alt={src} src={'/img/' + src} width={w} height={h}></Image>;
}
