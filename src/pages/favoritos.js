// import {  useContext } from "react";
// import { MainContextState } from "@/components/context/MainContextProvider";
import Favorites from '@/components/Favorites/Favorites'
import { MainContextState } from '@/components/context/MainContextProvider'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

const Favoritos = () => {
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

  const newLocal = 'm-0 p-2 text-center text-white bg-dark border rounded border-danger text-capitalize'
  return (
    <>
      <div className='bg-dark'>
        <h1 className={newLocal}>Mi lista</h1>
      </div>
      <Favorites />
    </>
  )
}

export default Favoritos
