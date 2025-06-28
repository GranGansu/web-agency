import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

export default function Acordeon({ items }) {
  return (
    <Accordion collapsible className='bg-yellow-200'>
      {items.map((item) => {
        return (
          <AccordionItem className='data-[state=open]:bg-yellow-300' key={item.title} value={item.title} >
            <AccordionHeader>
              <AccordionTrigger className='AccordionTrigger flex justify-start w-full py-10 sm:py-8 text-xl hover:bg-yellow-300'>
                <span className='sm:hover:underline'>{item.title}</span>
                <span className='AccordionChevron material-icons' aria-hidden>
                  arrow_drop_down
                </span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='py-4 pb-8 px-6 max-w-2xl'>
{/*               <span class='material-icons relative top-1 text-gray-300'>chevron_right</span> */}
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
