export default function FullSection({children}) {
  return (
    <div className='bg-slate-50 relative w-screen px-6 sm:px-0  gap-24 left-1/2 right-1/2 mr-[-50vw] ml-[-50vw] py-24'>
      <div className='max-w-5xl w-full mx-auto'>
        {children}
      </div>
    </div>
  );
}
