import { Navigate, Outlet } from 'react-router-dom'
import { ContextUser } from '../context/ContextCustomers'
import React, { useContext } from 'react';



const AdminRoutes = () => {

    let [user, setUser] = useContext(ContextUser);

    console.log(user);






    return (
        user.user.role === "admin" ? <Outlet /> : <Navigate to='/admin' />
    )
}

export default AdminRoutes;