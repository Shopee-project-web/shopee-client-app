import React, {useEffect, useState} from 'react';
import "./cart.css"
import "./product.scss"
import axios from "axios";
import {FaCircleChevronLeft} from "react-icons/fa6";
import {FaChevronCircleRight} from "react-icons/fa";

function CartItemList() {

  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/home/cart/user`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartItems(response?.data?.data.cartItemResponseList);
      // console.log(response?.data)
      console.log(response?.data.data)
    } catch (error) {
      console.error('Lấy danh sách sản phẩm trong giỏ hàng LỖI: ', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // -----------------------------
  const deleteCartItem = async (itemId) => {
    const token = localStorage.getItem('accessToken');
    try {
      await axios.delete(`http://localhost:8080/api/v1/home/cart/items/${itemId}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Xóa sản phẩm trong giỏ hàng thành công!');
      // Sau khi xóa thành công, cần cập nhật lại danh sách sản phẩm trong giỏ hàng bằng cách gọi lại hàm fetchCartItems
      fetchCartItems();
    } catch (error) {
      console.error('Xóa sản phẩm trong gior hàng bị lỗi:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
  // -----------------------------

  const updateCartItem = async (itemId, updateQuantity) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.put(
        `http://localhost:8080/api/v1/home/cart/${itemId}`,
        {updateQuantity},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Cập nhật số lượng sản phẩm thành công:', response.data.data);
      // Sau khi cập nhật thành công, gọi lại hàm fetchCartItems để cập nhật danh sách mới
      fetchCartItems();
    } catch (error) {
      console.error('Cập nhật số lượng sản phẩm trong giỏ hàng bị lỗi:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();

  }, []);

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity < 99) {
      updatedCartItems[index].quantity += 1;
      updatedCartItems[index].subtotal = updatedCartItems[index].price * updatedCartItems[index].quantity;
      setCartItems(updatedCartItems);
    }
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      updatedCartItems[index].subtotal = updatedCartItems[index].price * updatedCartItems[index].quantity;
      setCartItems(updatedCartItems);
    }
  };

  const handleQuantityChange = (index, updateQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = updateQuantity;
    setCartItems(updatedCartItems);
    updateCartItem(updatedCartItems[index].id, updateQuantity); // Gọi hàm cập nhật số lượng sản phẩm
  };

  const autoUpdateCartItem = (itemId, updateQuantity) => {
    setTimeout(() => {
      updateCartItem(itemId, updateQuantity);
    }, 5000);
  };


  return (
    <div className="recommended">
      <div className="container">
        <div className="recommended-container">
          <div className="recommended-head">
            <div className="recommended-tab active">
              <div className="recommended-heading">Giỏ hàng</div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <input type="checkbox" className="checkbox"/>
            <img
              src={item.productImage}
              alt={item.name}
              // className="product-image"
              style={{width: '70px', height: '70px'}}
            />
            <div>
              <li className="product-info1">Sản phẩm:</li>
              <li className="product-info2">{item.name}</li>
            </div>
            <div>
              <li className="product-info1">Màu sắc:</li>
              <li className="product-info2">{item.color}</li>
            </div>
            <div>
              <span className="product-info1">Kích cỡ:</span>
              <li className="product-info2">{item.size}</li>
            </div>

            <div className="product-details">
              <li className="product-info1">Giá:</li>
              <li className="product-info2">
                {item.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</li>
            </div>

            <div className="product-info2" style={{display: 'flex', alignItems: 'center'}}>

              <button className="sum-button"
                      onClick={() => decreaseQuantity(index)}>
                <FaCircleChevronLeft/>
              </button>
              <input
                readOnly
                type="text"
                aria-valuenow={item.quantity}
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                style={{
                  width: '16px',
                  height: '16px',
                  border: "3px solid #ee4d2d",
                  backgroundColor: "#ee4d2d",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textAlign: "center", // Căn giữa ngang
                  lineHeight: "15px" // Căn giữa dọc

                }}
              />
              <button className="sum-button"
                      onClick={() => increaseQuantity(index)}>
                <FaChevronCircleRight/>
              </button>
            </div>

            <div className="product-details">
              {/*<span >Tổng giá:</span>*/}
              <li style={{
                width: '48px',
                height: '16px',
                color: "#ee4d2d",
                fontSize: "16px",
                textAlign: "center", // Căn giữa ngang
                lineHeight: "15px" // Căn giữa dọc
              }}>
                {item.subtotal.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
              </li>
            </div>
            <div>
              <button className="delete-button"
                      onClick={() => deleteCartItem(item.id)}>
                Xóa
              </button>
              <button className="delete-button"
                      onClick={() => updateCartItem(item.id, item.quantity)}>
                Cập nhật
              </button>

            </div>


          </div>
        ))}
        <div className="recommended-container">
          <div className="recommended-head">
            <div className="recommended-tab active">
            </div>
          </div>
        </div>
        <div className="total-container ">
          <div className="recommended-head">
            <div className="recommended-tab3 active">
              <div className="recommended-heading">TỔNG THANH TOÁN</div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemList;

