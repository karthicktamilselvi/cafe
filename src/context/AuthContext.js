import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        isLoading: true
    });

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        setAuthState({
            isAuthenticated: !!token,
            isLoading: false
        });
    };

    useEffect(() => {
        checkAuth();
        
        const handleStorageChange = () => {
            checkAuth();
        };
        
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <AuthContext.Provider value={{ ...authState, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);




// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (token) {
//           setIsAuthenticated(true);
//         }
//       } catch (error) {
//         // logout();
//       } finally {
//         // setIsLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         // user,
//         isAuthenticated,
//         // isLoading,
//         // login,
//         // logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




