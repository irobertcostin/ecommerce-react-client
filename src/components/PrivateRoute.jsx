import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContextUser } from '../context/ContextCustomers';
import Login from './Login';




export default function PrivateRoute({ children, ...rest }) {
    const { user } = useContext(ContextUser);





    return (
        <Routes>
            <Route
                {...rest}
                element={user ? (
                    children
                ) : (
                    <Navigate to="/customers/login" replace element={<Login />} />
                )}
            />
        </Routes>
    );
}
