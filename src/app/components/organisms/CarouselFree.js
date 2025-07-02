import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function CarouselFree({ array }) {
  return (
    <Carousel>
      <CarouselContent>
        {array.map((e, index) => (
          <CarouselItem key={index} className='flex items-center'>
            <div className='h-full'>{e}</div>
            <p className='rounded-full bg-white text-xl px-2 p-1'>Sell online</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
