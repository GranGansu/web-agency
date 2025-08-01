import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

export default function Acordeon({ items, overallColor, accentColor }) {
  const overall = overallColor??'bg-yellow-200';
  const accent = accentColor??'bg-yellow-300'
  return (
    <Accordion collapsible className={overall}>
      {items.map((item) => {
        return (
          <AccordionItem className={`data-[state=open]:${accent} font-lexend`} key={item.title} value={item.title} >
            <AccordionHeader>
              <AccordionTrigger className={`AccordionTrigger flex justify-start w-full py-10 sm:py-8 text-xl hover:${accent}`}>
                <span className='sm:hover:underline'>{item.title}</span>
                <span className='AccordionChevron material-icons' aria-hidden>
                  arrow_drop_down
                </span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='py-4 pb-8 px-6 max-w-2xl'>
            <span className='hidden bg-yellow-300'></span>
          {/*     <span class='material-icons bg-black relative top-1 text-gray-300'>chevron_right</span> */}
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
