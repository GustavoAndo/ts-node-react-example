import { useContext } from "react";
import Forbidden from "../components/Forbidden";
import Login from "../components/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, nivel }: { children: JSX.Element, nivel?: string }) => {
    const auth = useContext(AuthContext)

    if (!auth.usuario) {
        return <Login />;
    }
    
    if (nivel === 'administrador'){
        if (auth.usuario.perfil !== nivel){
            return <Forbidden/>
        }
    }

    if (nivel === 'gestor'){
        if (auth.usuario.perfil !== nivel && auth.usuario.perfil !== 'administrador'){
            return <Forbidden/>
        }
    }
    
    return children;
}