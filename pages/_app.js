import { Fredoka, Barlow } from '@next/font/google'
import '../styles/globals.css'
/* const comforta = Fredoka({ preload: true, subsets: ['latin'] }) */
const comforta = Barlow({ preload: true, subsets: ['latin'], weight: '400' })
function MyApp({ Component, pageProps }) {
  const comfota = comforta.className
  return <Component {...pageProps} fuente={comfota} />
}

export default MyApp
