import { useContext, useEffect, useState } from "react";
import { collection,doc, getDocs, addDoc, deleteDoc,  query, where } from "firebase/firestore";
import {  db } from "@/firebase/initConfig"
import { MainContextState } from "../context/MainContextProvider";
// Importe de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { FetchData } from '../FetchData'
import VisualCard from '../VisualCard'

let dataFav=[]

const Favoritos = () => {
  const { state  } = useContext(MainContextState)
 // const [data, setData]=useState()

  const obtenerLista = () => {
    dataFav=[]
    const myCollection = collection(db, "listas")
    const q1 = query(myCollection, where("UID", "==", state.userID));
    getDocs(q1).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
       
        dataFav.push(doc.data())
        //console.log(dataFav);
      });
    })
  }
   
  //obtenerLista()
  useEffect(()=>{
    obtenerLista()
  },[]);
    
      // querySnapshot.forEach((mov) => (
       // console.log(data)
      //   ))

        return (
          <div className='container-fluid movies__container'>
            {console.log("la data es:", dataFav)}
            { 
              dataFav.forEach((mov) => (
              // console.log("mov: ",mov)
                <VisualCard key={mov.id} {...mov } />
            ))
          }
          </div>
        )
      }

export default Favoritos
