import '@/styles/globals.css'
import { appFirebase } from '@/firebase/initConfig'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}