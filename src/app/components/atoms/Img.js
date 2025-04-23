import Image from 'next/image';

export default function Img({ q = 80, src, className = '', w = 500, h = 500 }) {
  return <Image quality={q} className={className} alt={src} src={'/img/' + src} width={w} height={h}></Image>;
}
