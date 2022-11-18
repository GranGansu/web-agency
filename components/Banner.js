import { motion } from 'framer-motion'
import Image from 'next/image'
import { Comfortaa, Barlow } from '@next/font/google'
const comfort = Comfortaa({ preload: true, subsets: ['latin'] })
const barlow = Barlow({ preload: true, subsets: ['latin'], weight: '400' })
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
    return <div className={`text-3xl sm:text-6xl my-6 h-[50vh] flex items-center bg-center bg-cover relative border-red-400  text-black overflow-hidden border-y`}>
        <div className={margen + ' font-bold uppercase text-center z-10'}>
            <p className="opacity-70">Diseñamos <br></br><span className="text-red-400 text-6xl sm:text-8xl">webs</span></p>
            <motion.div className="mt-4  space-y-2 z-10" variants={container} initial="hidden" animate="show">
                <motion.p className="flex flex-row items-center" variants={item}><Image className="mr-2 opacity-70" alt="" src="/img/circulo2.png" width="30" height="30"></Image> LIGERAS</motion.p>
                <motion.p className="flex flex-row items-center" variants={item}><Image className="mr-2 opacity-70" alt="" src="/img/circulo2.png" width="30" height="30"></Image> RÁPIDAS</motion.p>
                <motion.p className="flex flex-row items-center" variants={item}><Image className="mr-2 opacity-70" alt="" src="/img/circulo2.png" width="30" height="30"></Image> 100% personalizadas</motion.p>
            </motion.div>
        </div>
        <motion.div transition={{ delay: 1, duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`left-0 absolute text-6xl flex flex-col w-[2000px] overflow-hidden h-full z-0 text-gray-100 ${barlow.className}`}>
            <p>DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE DISEÑO WEB USABILIDAD MARKETING GOOGLE</p>
        </motion.div>
        {/*           <Image className="absolute left-1/2 -translate-x-[50%] rotate-[5deg] rounded z-0" alt="" src="/img/design.webp" width="400" height="400"></Image> */}
    </div>
}