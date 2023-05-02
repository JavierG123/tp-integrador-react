
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* IMPORTANDO ICONOS BOOTSTRAP*/
import 'bootstrap-icons/font/bootstrap-icons.css'


const Navegacion = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='navbar'>
                <Container fluid >
                    <Navbar.Brand href="#home">
                        <img className='logo' src='./Netflix.png'></img>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Series</Nav.Link>
                        <Nav.Link href="#pricing">Películas</Nav.Link>
                        <Nav.Link href="#pricing">Mi lista</Nav.Link>
                        <Nav.Link href="#pricing">Explora por idiomas</Nav.Link>
                    </Nav>

                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link><i class="bi bi-search"></i></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><i class="bi bi-lightbulb"></i></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >
                                <img className='perfil' src='./perfil.png'></img>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navegacion