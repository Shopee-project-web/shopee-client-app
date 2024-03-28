import React from 'react'
// import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
// import Login from "../component/auth/Login";
import Home from "../pages/Home";
// import Register from "../pages/Register";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { Switch } from 'react-router-dom';

// Sử dụng Switch trong code của bạn


function Main() {
  return (
    <BrowserRouter>

    <Router>
      <Routes>
      {/*<Switch>*/}

        {/*<Route exact path="/">          <Home/>*/}
        {/*</Route>*/}
        <Route path="/" element={<Home />} />
      {/*<Route exact path="/register">          <Register/>*/}
      {/*</Route>*/}
      {/*<Route exact path="/login">          <Register/>*/}
      {/*</Route>*/}

      {/*  <Route exact path="/" element={<Home/>} />*/}
        {/*/!*<Route path="/register" element={<Register/>} />*!/*/}
        {/*<Route path="/login" element={<Register/>} />*/}

        {/*<Route exact path="/register">          <Register/>  </Route>*/}


        {/*<Route path="/auth/login" element={<Login/>} />*/}



      {/*</Switch>*/}

      </Routes>
      </Router>
    </BrowserRouter>
  )
}

export default Main
