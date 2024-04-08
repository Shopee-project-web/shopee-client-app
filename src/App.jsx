import React, {useState} from 'react';
import './App.scss';
import Footer from "./component/Footer/Footer";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import PageProductDetail from "./pages/PageProductDetail";
import CartItems from "./component/CartItems/CartItems";
import Cart from "./component/Cart/Cart";
import Search from "./pages/Search";
import Header from "./component/Header/Header";
import ProductByCategoryId from "./component/ProductByCategoryId/ProductByCategoryId";

function App() {
  return(

    <BrowserRouter>
      {/*<Header/>*/}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Register/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product/detail/:productId" element={<PageProductDetail/>}/>
        <Route path="/product/category/:categoryId" element={<ProductByCategoryId/>}/>
        <Route path="" element={<PageProductDetail/>}/>

        <Route path="/cart-items" element={<CartItems/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>



        {/*<Route path="/auth/login" element={<Login/>}/>*/}

      </Routes>

    </BrowserRouter>
  );
}

export default App;
