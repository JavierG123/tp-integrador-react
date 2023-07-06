// import {  useContext } from "react";
// import { MainContextState } from "@/components/context/MainContextProvider";
import Favorites from "@/components/Favorites/Favorites"

const Favoritos = () => {
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
