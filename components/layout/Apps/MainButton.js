export default function MainButton({ id, title, setMostrar, mostrar }) {
  return (
    <button
      onClick={() => {
        setMostrar(id);
      }}
      className={`text-xl ${mostrar === id ? 'border-8 border-red-300' : 'bg-white/60'} text-gray-600 p-4 rounded-full shadow-inner bg-white px-6`}>
      {mostrar === id && <span className='text-xs block'>Creamos tu</span>}{title}
    </button>
  );
}
