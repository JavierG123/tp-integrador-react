import Movies from '@/components/Movies/Movies'
import { MainContextState } from '../components/context/MainContextProvider'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

const Peliculas = () => {
  const { state, dispatch } = useContext(MainContextState)
  const router = useRouter()

  const logOut = () => {
    dispatch({ type: 'LOGOUT' })
    if (typeof window !== 'undefined') {
      router.push('/') // Redirige a la página principal después de cerrar sesión
    }
  }

  const isLoggedIn = state.isLoggedIn

  useEffect(() => {
    if (!isLoggedIn) {
      logOut() // Cierra sesión si el usuario no está logueado
    }
  }, [])

  const tituloPeliculas = 'm-0 p-2 text-center text-white bg-dark border rounded border-success text-capitalize'
  return (
    <>
      <div className='bg-dark'>
        <h1 className={tituloPeliculas}>Peliculas</h1>
      </div>
      <Movies />
    </>
  )
}

export default Peliculas
