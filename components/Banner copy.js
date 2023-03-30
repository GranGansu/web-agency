import { motion } from 'framer-motion'
import Image from 'next/image'
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
    return <div className={`text-3xl sm:text-6xl mb-6 flex items-center justify-center relative text-black overflow-hidden p-8`}>
        <div className={margen + ' font-bold uppercase z-10 text-center'}>
            <motion.div className="mt-0 flex flex-col justify-center items-center space-y-2 z-10" variants={container} initial="hidden" animate="show">
                <p className="opacity-90">diseñamos<span className="text-red-400"> tu web</span></p>
                <motion.p className="flex flex-row items-center text-7xl" variants={item}>
                    <Image className="hidden mr-2 opacity-70" alt="" src="/img/circulo2.png" width="30" height="30"></Image>
                    SIMPLE &</motion.p>
                <motion.p className="flex flex-row items-center text-7xl" variants={item}> LIGERA</motion.p>
{/*                 <motion.p className="flex flex-row justify-center items-center" variants={item}> <span className="text-red-400">101%</span> personalizadas</motion.p> */}
            </motion.div>
        </div>
        <motion.div transition={{ delay: 1, duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`left-0 absolute text-6xl flex flex-col w-[2000px] overflow-hidden h-full z-0 text-gray-100`}>
            <p>DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE</p>
        </motion.div>
    </div>
}