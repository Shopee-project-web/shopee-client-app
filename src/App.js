import React from 'react';
import './App.css';
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from './component/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth/login" element={<Login/>}></Route>


      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
