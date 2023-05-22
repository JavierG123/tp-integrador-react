import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MainContextState } from "./context/MainContextProvider";
//import { collectGenerateParams } from "next/dist/build/utils";

const Login = () => {
  const{dataState, setDataState }=useContext(MainContextState)

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const mostrarEmailAndPass = (e) => {
    e.preventDefault();
    //alert(`Email: ${email} \nPassword: ${pass}`);
    setDataState({... dataState,username:email, isLoggedIn:true})
   
  };

  if(dataState.isLoggedIn){ return <></>}

  return (
    <Container className="w-50 border border-white container__login">
      
      <Form>
        <Form.Group>
          <Form.Label>Correo Electronico:</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            id="email"
            placeholder="Ingrese un email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            Nunca comparta su correo electronico con nadie!.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mt-2">Contraseña:</Form.Label>
          <Form.Control
            required
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>

        <Container className="pt-4 ">
          <Button
            variant="danger"
            type="submit"
            onClick={(e) => mostrarEmailAndPass(e)}
          >
            Ingresar
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
