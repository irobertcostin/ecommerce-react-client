import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { UserProvider } from "./context/ContextCustomers";
import PrivateRoute from "./components/PrivateRoute";
import { CartProvider } from "./context/ContextCart";
// components
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

import Products from "./components/products/Products";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";
import { ProductsProvider } from "./context/ContextProducts";
import Cookies from 'js-cookie';
import { message } from "antd";
import { ContextUser } from "./context/ContextCustomers";
import { ContextCart } from "./context/ContextCart";
import Footer from "./components/home/Footer";
import Admin from "./components/admin/Admin";
import AdmUsersEdit from "./components/admin/customer/AdmUsersEdit";
import AdmOrdersEdit from "./components/admin/orders/AdmOrdersEdit";
import AdminRoute from "./components/AdminRoute";



function App() {


  let [signedIn, setSignedIn] = useState(false)
  let [user, setUser] = useState("");
  let [totalCartObj, setTotalCartObj] = useState();
  // let [cart, setCart] = useContext(ContextCart);



  useEffect(() => {

  }, [user])


  useEffect(() => {

  }, [totalCartObj])

  return (



    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Navbar signedIn={signedIn} setSignedIn={setSignedIn} setUser={setUser} user={user} totalCartObj={totalCartObj} setTotalCartObj={setTotalCartObj} />
          <Routes>

            {/* <PrivateRoute path="/" element={<Home />} /> */}



            <Route element={<PrivateRoute />}>

              <Route path="/" element={<Home user={user} />} />
              <Route path="/gallery" element={<Products />} />
              <Route path="/product/:id" element={<Product setTotalCartObj={setTotalCartObj} />} />



              <Route element={<AdminRoute />}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/customers/:id" element={<AdmUsersEdit />} />
                <Route path="/admin/orders/:id" element={<AdmOrdersEdit />} />
              </Route>




            </Route>


            <Route path="/login" element={<Login user={user} setUser={setUser} setSignedIn={setSignedIn} />} />
            <Route path="/register" element={<Register />} />




          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>


  );
}

export default App;





// check row allignment on all admin components
// error when checking out , total does no count multiple items, must retest
// see 2nd user , order 11 
// before order, check stock/quantity
// when checking out, erase quantity from store?

// pressing add to cart multiple times will not update the cart total amount
// subtotal not updated when checkout 
// cannot send props from navbar to cart to cartRow 
// pagina pentru orders -> order details 
// conturi access copy to clipboard


// parte administrator 
// delete users 
// delete orders 
// delete order details 
// add single products
// create users


// actualizare cart items , cart total price live
// cart price with limit in front-end and backend
// checkout successfully , or redirect to another page 
// after checking out, a success message, page, something 
//better display of the 


// restructurare foldere 
// componente si subcomponente