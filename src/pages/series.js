import Series from '@/components/Series/Serie'
import { MainContextState } from '@/components/context/MainContextProvider'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

const Seriess = () => {
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

  const tituloSerie = 'm-0 p-2 text-center text-white bg-dark border rounded border-info text-capitalize'
  return (
    <>
      <div className='bg-dark'>
        <h1 className={tituloSerie}>Series</h1>
      </div>
      <Series />
    </>
  )
}

export default Seriess
