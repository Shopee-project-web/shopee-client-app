import React, {useEffect, useState} from 'react'
import Header from "../component/Header/Header";
import Category from "../component/Category/Category";
import Product from "../component/Product/Product3";
import Footer from "../component/Footer/Footer";
import {findProductList} from "../api/productAPI";
import Products from "../component/Product/Products";

function Search() {
    const [products, setProducts] = useState([])
    const [show, setShow] = useState(18)

    //DATA PRODUCT
    useEffect(() => {
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
        getProductListData();
    }, []);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };
    return (
        <div className="margin-top">
            {/*<Header/>*/}
            <Products />
            <Footer/>
        </div>
    )
}

export default Search
