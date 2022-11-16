import { Fredoka } from '@next/font/google'
import '../styles/globals.css'
const comforta = Fredoka({ preload: true, subsets: ['latin'] })
function MyApp({ Component, pageProps }) {
  const comfota = comforta.className
  return <Component {...pageProps} fuente={comfota} />
}

export default MyApp
