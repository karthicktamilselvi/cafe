import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const isAuthenticated = useAuth();
    const location = useLocation();
    console.log("ddd",isAuthenticated)
    if (isAuthenticated === null) {
        return <div>Loading...</div>; 
    }
    if (!isAuthenticated) {
        // Redirect to login page, storing the location they came from
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default PrivateRouter