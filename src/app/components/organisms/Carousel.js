import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselComponent({ array }) {
  return (
    <Carousel className='flex w-[70vw] '>
      <CarouselContent>
        {array.map((e, index) => (
          <CarouselItem key={index} className='grid sm:grid-cols-2'>
            <div>
              <Card className="border-0 shadow-none">
                <CardContent className={`flex p-0 rounded-xl shadow-lg`}>
                  <Image width={500} height={500} alt={e} className='w-full h-[50vh] object-cover rounded-xl' src={'/img/' + e.img} />
                </CardContent>
                {/* <p className='text-2xl font-bold mt-6 p-2 text-center  rounded-full'>{e.title}</p> */}
              </Card>
            </div>
            <div className='flex items-start flex-col justify-center'>
            <p className='text-3xl font-bold pl-4 p-2 text-left rounded-full'>{e.title}</p>
            <p className='text-lg mt-2 p-4 bg-white text-gray-700 max-w-lg rounded-xl -ml-4'>
              Next.js supera la velocidad de WordPress gracias a su renderizado estático y generación de páginas en tiempo de compilación.
            </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
{/*       <CarouselPrevious />
      <CarouselNext/> */}
    </Carousel>
  );
}
