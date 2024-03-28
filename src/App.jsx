import React, {useState} from 'react';
import './App.scss';
import Footer from "./component/Footer/Footer";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Register/>}/>
        <Route path="/register" element={<Register/>}/>



        {/*<Route path="/auth/login" element={<Login/>}/>*/}

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
