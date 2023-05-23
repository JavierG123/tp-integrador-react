import '@/styles/globals.css'
import { appFirebase } from '@/firebase/initConfig'
import Navegacion from '@/components/Navegacion'
import Footer from '@/components/Footer'


export default function App({ Component, pageProps }) {
    return (
        <>
            <Navegacion />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}