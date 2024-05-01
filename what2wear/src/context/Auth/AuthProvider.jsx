import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem('token')

        if (storedToken) {
            setToken(storedToken)
            setIsAuthenticated(true)
        }
    }, [])

    const loginUser = (response) => {
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', response.firstName)
        localStorage.setItem('id', response.id)
        setToken(response.token)
        setIsAuthenticated(true)
    }
    
    const logoutUser = () => {
        localStorage.clear()
        setToken(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            token,
            loginUser,
            logoutUser
        }}>
            { children }
        </AuthContext.Provider>
    );
}