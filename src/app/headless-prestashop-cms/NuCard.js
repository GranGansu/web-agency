import { DiamondPlus } from 'lucide-react';
import HBenefitText from './HBenefitText';
import Image from 'next/image';

export default function NuCard({main, title, img}) {
  return (
    <div className='w-full bg-gray-50 mx-auto flex flex-col items-center border rounded-xl gap-4 pb-4  relative'>
      <Image width={500} height={500} alt={'sdfsdf'} className='w-full h-[50vh] object-cover rounded-xl' src={'/img/' + img} />
      <HBenefitText
        bg='from-yellow-200 svia-yellow-200'
        e={{
          title: title,
          icon: <DiamondPlus size={150} className='rotate-6 text-black/40' />,
          description: 'Más rápido que un halcón',
          main: main,
          intro: 'Carga completa',
        }}></HBenefitText>
    </div>
  );
}
