import { AuthContext } from './AuthContext'
import { useState, useEffect } from 'react'
import { Usuario } from '../types/Usuario'
import { Api } from '../hooks/Api'

export const AuthProvider = ({children} : {children: JSX.Element}) => {
    const api = Api()

    const [usuario, setUsuario] = useState<Usuario | null>(null) 

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('token')
            if (storageData) {
                const data = await api.validateToken(storageData)
                if (data.id) {
                    setUsuario(data);
                }
            }
        }
        validateToken();
    }, []);


    const signin = async (email: string, senha: string) => {
        const data = await api.signin(email, senha);
        console.log(data)
        if (data.usuario && data.token) {
            setUsuario(data.usuario);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = () => {
        setUsuario(null)
        setToken('')
        console.log('singout')
    }

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
    }

    return (
        <AuthContext.Provider value={{usuario, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}