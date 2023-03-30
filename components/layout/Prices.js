import { Price } from '../organisms';

export default function Tarifas() {
  return (
    <div id='tarifas' className={'max-w-6xl p-4 m-auto my-12  flex flex-col justify-around text-red-400 '}>
      <div className='grid gap-y-10'>
        <Price title='web normal' start='400' maintenance='20' extra='100' icon='website3' />
        <Price title='ecommerce' start='1500' maintenance='50' extra='300' icon='cart' />
        <Price title='traducción' sub='Inglés, Ruso, Chino, Español, Alemán, Francés' start='200' extra='100' icon='translate' />
      </div>
    </div>
  );
}
