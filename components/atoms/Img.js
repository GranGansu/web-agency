import Image from 'next/image';

export default function Img({ src, className }) {
  return <Image className={className} alt={src} src={'/img/' + src} width='500' height='500'></Image>;
}
