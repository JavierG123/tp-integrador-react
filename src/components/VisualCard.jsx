import { collection, doc, getDocs, addDoc, deleteDoc, query, where } from 'firebase/firestore'
import { db } from '@/firebase/initConfig'
import { ButtonGroup, Button } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { MainContextState } from './context/MainContextProvider'
import { useContext, useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const VisualCard = (params) => {
  const API_IMG = 'https://image.tmdb.org/t/p/w500'

  const { state } = useContext(MainContextState)
  const [favorito, setFavorito] = useState(false)
  const [documentID, setDocumentID] = useState()

  const estaEnFavoritos = () => {
    const myCollection = collection(db, 'listas')

    const q1 = query(myCollection, where('UID', '==', state.userID), where('id', '==', params.id))
    getDocs(q1).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        setFavorito(true)
        setDocumentID(doc.id)
      })
    })
  }

  const agregarFavoritos = async () => {
    try {
      const docRef = await addDoc(collection(db, 'listas'), {
        UID: state.userID,
        id: params.id,
        name: params.name || params.title,
        original_name: params.original_name || params.original_title,
        poster_path: params.poster_path,
        overview: params.overview
      })
      setFavorito(true)
      setDocumentID(docRef.id)
    } catch (e) {
      console.error('Se produjo un error agregando a la lista: ', e)
    }
  }

  const quitarFavoritos = async () => {
    // console.log(documentID)

    await deleteDoc(doc(db, 'listas', documentID))

    setFavorito(false)
    if (params.obtenerLista) { params.obtenerLista() }
  }

  const renderTooltip = text => (
    <Tooltip>{text}</Tooltip>
  )

  useEffect(() => { /// ejecuta solo en el primer render
    params.id && estaEnFavoritos()
  }, [])

  return (
    <div className='visual-card'>
      <div className='card-body text-white text-center p-4'>
        <h5 className='card-title my-2 '>
          {params.title}
          {params.original_name}
        </h5>
        <img
          src={API_IMG + params.poster_path}
          className='card-img-top poster__movie'
          alt='Poster de serie o pelicula'
        />
        <div className='botones-card'>
          {state.userID && /// si no existe el Id de usuaria en el context no muestra la botonera
            <ButtonGroup size='lg'>
              <OverlayTrigger placement='top' delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Reproducir')}>
                <Button variant='dark'><i className='bi bi-play-circle' /></Button>
              </OverlayTrigger>
              {!favorito
                ? <OverlayTrigger placement='top' delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Agregar a Mi Lista')}>
                  <Button variant='dark'> <i className='bi bi-plus-circle' onClick={() => agregarFavoritos()} /></Button>
                  </OverlayTrigger>
                : <OverlayTrigger placement='top' delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Quitar de Mi Lista')}>
                  <Button variant='dark'> <i className='bi bi-dash-circle' onClick={() => quitarFavoritos()} /></Button>
                  </OverlayTrigger>}
              <OverlayTrigger placement='top' delay={{ show: 250, hide: 400 }} overlay={renderTooltip(params?.overview)}>
                <Button variant='dark'><i className='bi bi-info-circle' /></Button>
              </OverlayTrigger>
            </ButtonGroup>}
        </div>
      </div>
    </div>
  )
}

export default VisualCard
