import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import PropTypes from "prop-types";

const ProtectedRoute = ({isLoggedIn,children,redirectPath="/",...rest}) => {
    <Route
    {...rest}
    element={
        () => {
        if(!isLoggedIn){
            return (
                <Navigate to={redirectPath} />
            ) 
        }
        return children;
    }
    }
    />;
}

ProtectedRoute.propTypes = {
    isLoggedIn: PropTypes.bool,
    children:PropTypes.node,
    redirectPath:PropTypes.string
  };
export default ProtectedRoute