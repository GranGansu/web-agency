import { motion } from 'framer-motion'
import { HiCheckCircle } from "react-icons/hi";

export default function Banner() {
    const item = {
        hidden: { x: -200, opacity: 0 },
        show: { x: 0, opacity: 1 }
    }
    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 1
            }
        }
    }
    const margen = "max-w-6xl m-auto p-4"
    return <div className={`text-4xl sm:text-6xl flex items-center justify-center sm:mx-0 mx-4 relative text-white pt-0 p-8 border-8 rounded border-white`}>
        <div className={margen + ' font-bold uppercase z-30 text-center p-10 '}>
            <motion.div className="mt-0 flex flex-col justify-center items-center space-y-2 z-10" variants={container} initial="hidden" animate="show">
                <div className=" w-full">
                <motion.p className="flex flex-row items-center " variants={item}>DISEÑAMOS TU WEB</motion.p>
                <motion.p className="flex flex-row items-center " variants={item}>SIMPLE &</motion.p>
                <motion.p className="flex flex-row items-center  bg-white text-black px-2" variants={item}> LIGERA</motion.p></div>
            </motion.div>
        </div>
        <div className='hidden m-auto w-fit max-w-2xl flex flex-col text-white text-lg my-12 p-8 relative  rounded'>
            <ul className='text-2xl space-y-2 mb-4 font-bold'>
              <li className='hover:underline underline-offset-4'>
                <HiCheckCircle className='inline' /> Diseñamos tu presencia
                online
              </li>
              <li className='text-red-300 underline underline-offset-4'>
                <HiCheckCircle className='inline' /> Hacemos modificaciones al
                instante.
              </li>
              <li className='hover:underline underline-offset-4'>
                <HiCheckCircle className='inline' /> Hacemos modificaciones al
                instante.
              </li>
            </ul>
          </div>
    </div>
}