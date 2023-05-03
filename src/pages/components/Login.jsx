import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const mostrarEmailAndPass = (e) => {
    e.preventDefault();
    alert(`Email: ${email} \nPassword: ${pass}`);
  };

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
