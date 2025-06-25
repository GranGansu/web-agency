import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

export default function Acordeon({ items }) {
  return (
    <Accordion >
      {items.map((item) => {
        return (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionHeader>
              <AccordionTrigger className='AccordionTrigger flex justify-start w-full py-8 text-xl hover:bg-yellow-200'>
                <span className='hover:underline'>{item.title}</span>
                <span className='AccordionChevron material-icons' aria-hidden>
                  arrow_drop_down
                </span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='py-4 px-6 text-gray-500  rounded'>
{/*               <span class='material-icons relative top-1 text-gray-300'>chevron_right</span> */}
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
