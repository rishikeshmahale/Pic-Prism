import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from "react-router-dom";


const ProtectedRoute = ({ children, requiresAuth = true}) => {
    
    const { isAuthenticated, role } = useSelector((state) => state.auth);

    const { pathname } = useLocation();
    
    if (isAuthenticated && (pathname == "/login" || pathname == "/signup")) {
        return (
            <Navigate to={`/${role}/profile`} />
        );
    } 

    if (!isAuthenticated && requiresAuth) {
        return <Navigate to="/login" />        
    }

    return children;
}

export default ProtectedRoute;
