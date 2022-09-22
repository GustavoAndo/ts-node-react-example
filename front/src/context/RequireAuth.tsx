import { useContext } from "react";
import Login from "../components/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext)

    if (!auth.usuario) {
        return <Login />;
    }

    return children;
}