import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import AddCardIcon from '@mui/icons-material/AddCard';
export default function Step({title, iconID}) {
  const icons =  [<BuildCircleIcon/>,<CurrencyYenIcon/>,<AddCardIcon/>]
  return (
    <div className='max-w-2xl m-auto'>
    <div className='bg-white grid grid-cols-2 text-2xl py-12 mb-2'>
      <div className="flex items-center justify-center w-full">{title}</div>
     {/*  <div className="flex items-center justify-center w-full text-3xl">{icons[iconID]}</div> */}
    </div></div>
  );
}
