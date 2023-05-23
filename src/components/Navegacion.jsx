import { useContext } from "react";
import { MainContextState } from "./context/MainContextProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";

const Navegacion = () => {
  const{dataState, setDataState }=useContext(MainContextState)
  
  const logOut=() => {
    setDataState({... dataState,username:'anonymous', isLoggedIn:false})
  }

  const navLinks = [
    {title: 'Home', path: '/home'},
    {title: 'Movies', path: '/movies'},
    {title: 'Series', path: '/series'},
  ]

  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="logo" src="./Netflix.png"></img>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Inicio</Nav.Link>
          <Nav.Link href="#Series">Series</Nav.Link>
          <Nav.Link href="/movies">Películas</Nav.Link>
          <Nav.Link href="#Lista">Mi lista</Nav.Link>
          <Nav.Link href="#Idiomas">Explora por idiomas</Nav.Link>
        </Nav>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Link>
            <i className="bi bi-search"></i>
          </Nav.Link>
          <Nav.Link>
            <i className="bi bi-lightbulb"></i>
          </Nav.Link>
          <Nav.Link>
            <i className="bi bi-box-arrow-in-left" title="cerrar sesión" onClick={()=>{logOut()}}></i>
          </Nav.Link>
          <Nav.Link>
            <img className="perfil" src="./perfil.png"></img>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
