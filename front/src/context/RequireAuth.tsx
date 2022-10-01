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
        console.log("entrou if adm")
        if (auth.usuario.perfil !== nivel){
            console.log("entrou if forbiden adm")
            return <Forbidden/>
        }
    }

    if (nivel === 'gestor'){
        console.log("entrou if gestor")
        if (auth.usuario.perfil !== nivel && auth.usuario.perfil !== 'administrador'){
            console.log("entrou if forbiden gestor")
            return <Forbidden/>
        }
    }
    
    console.log("saiu de todos if")
    return children;
}