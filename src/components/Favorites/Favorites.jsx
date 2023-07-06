import { useContext, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase/initConfig'
import { MainContextState } from '../context/MainContextProvider'
// Importe de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import VisualCard from '../VisualCard'

const Favoritos = () => {
  const { state } = useContext(MainContextState)
  const [data, setData] = useState([])

  const obtenerLista = () => {
    const listaFav = []
    setData([])

    const myCollection = collection(db, 'listas')
    const q1 = query(myCollection, where('UID', '==', state.userID))
    getDocs(q1).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());

        listaFav.push(doc.data())

        setData(listaFav)
      })
    })
  }

  useEffect(() => {
    obtenerLista()
  }, [])

  return (
    <div className='container-fluid movies__container'>
      {
        data.map((mov) => (
          <VisualCard key={mov.id} {...mov} obtenerLista={obtenerLista} />
        ))
      }

    </div>
  )
}

export default Favoritos
