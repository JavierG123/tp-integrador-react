import { useContext } from 'react'
import { MainContextState } from '@/components/context/MainContextProvider'

const Home = () => {
  const { state } = useContext(MainContextState)

  const newLocal = 'm-0 p-2 text-center text-white bg-dark border rounded border-warning text-capitalize'
  return (
    <>
      <div className='bg-dark'>
        <h1 className={newLocal}>Bienvenido {state.username}</h1>
      </div>
    </>
  )
}

export default Home
