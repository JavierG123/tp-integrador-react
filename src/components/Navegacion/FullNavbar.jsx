
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProfileMenu from "./ProfileMenu";
import NextLink from 'next/link';
import Link from "next/link";


/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const FullNavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <Navbar className="navbar negro">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img className="logo" src="./Netflix.png"></img>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NextLink href="/" passHref>Inicio</NextLink>
                        <NextLink  href="/series" passHref>
                            Series
                        </NextLink>
                        <NextLink href="/peliculas" passHref>Películas</NextLink>
                        <NextLink href="#Lista" passHref>Mi lista</NextLink>
                        <NextLink href="#Idiomas" passHref>Explora por idiomas</NextLink>
                    </Nav>

                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Link>
                            <i className="bi bi-search"></i>
                        </Nav.Link>
                        <Nav.Link>
                            <i className="bi bi-lightbulb"></i>
                        </Nav.Link>
                        <Nav.Link onClick={() => toggleShowMenu()}>
                            <img className="perfil" src="./perfil.png"></img>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <ProfileMenu showMenu={showMenu} />
        </>
    );
};

export default FullNavBar;
