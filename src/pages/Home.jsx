import React from 'react'
import Header from "../component/Header/Header";
import Category from "../component/Category/Category";
import Product from "../component/Product/Product";

function Home() {
  return (
    <div className="margin-top">
      <Header/>
      <Category/>
      <Product/>
    </div>
  )
}

export default Home
