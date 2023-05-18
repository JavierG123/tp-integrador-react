import Head from 'next/head'
// =============== ESTILOS ===============
import 'bootstrap/dist/css/bootstrap.min.css';
// =============== COMPONENTS ===============
import { MainContextProvider } from './components/context/MainContextProvider';

import Navegacion from './components/Navegacion'
import Login from './components/Login';
import Footer from './components/Footer';


// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Página de inicio — Netflix</title>
        <meta name="description" content="Sitio Clon de Netflix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon-Netflix.ico"></link>
      </Head>

    <MainContextProvider>
        <Navegacion />
       
         <Login />

        <main >
          <h1 className='titulo'>TP INTEGRADOR...</h1>
          <div className='centrado'>
            <img src='https://media.tenor.com/t3yHhG6m4YkAAAAC/cat-work.gif' alt='gif de gato trabajando'></img>
          </div>
        </main>

        <Footer />
      </MainContextProvider>
    </>
  )
}
