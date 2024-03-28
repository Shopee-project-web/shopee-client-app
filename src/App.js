import React from 'react';
import './App.css';
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from './component/auth/Login';
import Logout from './component/auth/Logout';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/logout" element={<Logout/>}/>

      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
