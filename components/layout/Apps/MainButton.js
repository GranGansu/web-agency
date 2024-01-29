export default function MainButton({ id, title, setMostrar, mostrar }) {
  return (
    <button
      onClick={() => {
        setMostrar(id);
      }}
      className={`text-2xl ${mostrar === id ? 'border-4 border-red-300' : 'bg-white/60'} text-gray-600 p-4 rounded-full shadow-inner bg-white px-8`}>
      <span className='text-xs block'>Creamos tu</span>{title}
    </button>
  );
}
