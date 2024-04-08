import React, {useEffect, useState} from 'react'
import Header from "../component/Header/Header";
import Category from "../component/Category/Category";
import Footer from "../component/Footer/Footer";
import Products from "../component/Product/Products";
import {findProductList} from "../api/productAPI";
import Poster from "../component/Poster/Poster";

function Home() {
    const [products, setProducts] = useState([])
    const getProductListData = async () => {
        try {
            const response = await findProductList();
            const shuffledProducts = shuffleArray(response);
            setProducts(shuffledProducts);
            console.log("Dữ liệu cập nhật thành công như sau:", response)
        } catch (error) {
            console.error("Dữ liệu cập nhật xảy ra lõi:", error);
        }
    };

    useEffect(() => {
        getProductListData();
    }, []);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="margin-top">
            <Header setProducts={setProducts}/>
            {/*<Header/>*/}
            {/*<Poster/>*/}
            <Category/>
            {/*<Products  products={products}></Products>*/}
            <Products products={products}/>
            <Footer/>
        </div>
    )
}

export default Home
