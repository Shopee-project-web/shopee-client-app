import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItemList from './CartItemList';
import {toast} from "react-toastify";
import Header from "../Header/Header";

function Cart() {
    // const [cartItems, setCartItems] = useState([]);
    //
    // const fetchCartItems = async () => {
    //     const token = localStorage.getItem("accessToken");
    //     try {
    //         const response = await axios.get(
    //             `http://localhost:8080/api/v1/home/cart/user`,
    //             {
    //                 headers: {
    //                     Accept: "application/json",
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             }
    //         );
    //         setCartItems(response?.data?.data.cartItemResponseList);
    //         // console.log(response?.data)
    //         console.log(response?.data?.data)
    //     } catch (error) {
    //         console.error('Error fetching cart items:', error);
    //     }
    // };
    //
    // useEffect(() => {
    //     fetchCartItems();
    // }, []);


    return (
        <div className="margin-top">
            <Header/>
            {/*<CartItemList cartItems={cartItems} />*/}
            <CartItemList />
        </div>
    );
}

export default Cart;
