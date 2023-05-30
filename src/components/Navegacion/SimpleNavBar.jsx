
import Container from "react-bootstrap/Container";

import LoginButton from "./LoginButton";
import SelectIdioma from "./SelectIdioma";

/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";

const SimpleNavBar = () => {


  return (
    <>
      <Container fluid className=" container__simple_nav " >

        <SelectIdioma />

        <LoginButton />

      </Container>
    </>
  );
};

export default SimpleNavBar;
