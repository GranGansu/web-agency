import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
export default function Tooltips({text, children, className}) {
  return (

    <Tooltip>
      <TooltipTrigger className={className}>{children}</TooltipTrigger>
      <TooltipContent className="relative left-0 bottom-0 z-[99] w-full h-full">
        <p className='text-white capitalize text-lg'>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
