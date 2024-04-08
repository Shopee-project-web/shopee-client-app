import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);

    // Lấy dữ liệu giỏ hàng từ API hoặc trạng thái của ứng dụng
    useEffect(() => {
        // Đoạn mã lấy dữ liệu từ API và cập nhật vào state cartItems
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/home/cart/user');
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    // Hàm để đếm số lượng sản phẩm trong giỏ hàng
    const countTotalItems = () => {
        let totalCount = 0;
        cartItems.forEach(item => {
            totalCount += item.quantity;
        });
        return totalCount;
    };

    return (
        <div>
            <h2>Giỏ hàng</h2>
            <p>Tổng số lượng sản phẩm trong giỏ hàng: {countTotalItems()}</p>
            {/* Hiển thị các sản phẩm trong giỏ hàng */}
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name} - Số lượng: {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default CartItems;
