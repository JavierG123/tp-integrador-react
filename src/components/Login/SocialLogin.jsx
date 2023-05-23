
import Button from 'react-bootstrap/Button';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { appFirebase } from "@/firebase/initConfig";

const SocialLogin = () => {
  const googleProvider = new GoogleAuthProvider();

  function doLogin() {
    const auth = getAuth(appFirebase);
    signInWithPopup(auth, googleProvider)
      .then((credentials) => {
        const user = credentials.user;
        console.log("El usuario es ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <Button variant="warning" onClick={() => doLogin()}>Login with Google</Button>
  );
};

export default SocialLogin;
