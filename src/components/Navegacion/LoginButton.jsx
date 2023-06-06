import Button from "react-bootstrap/Button";
import NextLink from "next/link"
const LoginButton = () => {

    return (
        <>
            <NextLink href='/' passHref>
                <Button
                    className="rojo"
                    variant="danger" size="sm"
                >
                    Iniciar sesión
                </Button>
            </NextLink>
        </>
    )

}

export default LoginButton;