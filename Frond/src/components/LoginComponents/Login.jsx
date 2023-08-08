import React from "react";
import { useAuth0 } from "@auth0/auth0-react";




const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated){
    return(
        <div></div>
    )
  }

  return <button className="mr-2" onClick={() => loginWithRedirect()}><strong>Iniciar Sesion</strong></button>;
};

export default LoginButton;