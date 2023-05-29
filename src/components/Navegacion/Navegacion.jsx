import { useContext } from "react";
import { MainContextState } from "../context/MainContextProvider";
import FullNavBar from "./FullNavbar";
import SimpleNavBar from "./SimpleNavBar";


/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";


const Navegacion = () => {
  const{dataState }=useContext(MainContextState)


  return (
    dataState.isLoggedIn ? <FullNavBar /> : <SimpleNavBar />
  )
};

export default Navegacion;
