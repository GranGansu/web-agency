import { Karla } from '@next/font/google'
import '../styles/globals.css'
const manrope = Karla({ preload: true, subsets: ['latin'], weight: '400' })
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} fuente={manrope.className} />
}

export default MyApp
