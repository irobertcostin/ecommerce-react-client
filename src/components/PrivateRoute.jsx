import { Navigate, Outlet } from 'react-router-dom'
import { ContextUser } from '../context/ContextCustomers'
import React, { useContext } from 'react';



const PrivateRoutes = () => {

    let [user, setUser] = useContext(ContextUser);



    return (
        user ? <Outlet /> : <Navigate to='/customers/login' />
    )
}

export default PrivateRoutes;