import { useState, useContext } from "react";
import { MainContextState } from "../context/MainContextProvider";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//import { collectGenerateParams } from "next/dist/build/utils";

const Login = () => {
  
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const { state, dispatch } = useContext(MainContextState);

  const mostrarEmailAndPass = (e) => {
    e.preventDefault();
    //alert(`Email: ${email} \nPassword: ${pass}`);
   // setDataState({ ...dataState, username: email, isLoggedIn: true });
   dispatch({type:"LOGIN"});
   dispatch({type:"SETUSERNAME",username:email});
  };

  if (state.isLoggedIn) {
    return <></>;
  }

  return (
    <div className="row pantalla__login p-5">      
      <div className="col-7">
        <img src="./Netflix.png" alt="Imagen Titulo de Netflix" />
      </div>
      <Container className="col-5 py-2 container__login rounded border border-danger">
        <Form className="p-3 formulario__login">
          <h2 className="mb-4">Inicia Sesión</h2>
          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese un email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="password"
              name="pass"
              id="pass"
              placeholder="Contraseña"
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>

          <div className=" ">
            <Button
              className="container w-50 rojo text-white"
              variant=""
              type="submit"
              onClick={(e) => mostrarEmailAndPass(e)}
            >
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
