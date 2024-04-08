import React from 'react'
import Header from "../component/Header/Header";
import ProductDetail from "../component/ProductDetail/ProductDetail";
import Footer from "../component/Footer/Footer";

function PageProductDetail() {
  return (
    <div className="margin-top">
      <Header/>
      <ProductDetail/>
        <Footer/>
    </div>
  )
}

export default PageProductDetail
