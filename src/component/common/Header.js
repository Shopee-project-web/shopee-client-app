import React from 'react'
import '../../css/Header.css'
import {BsCart2} from "react-icons/bs";
import {RiFindReplaceLine} from "react-icons/ri";
import {AiOutlineHeart} from "react-icons/ai";
import {BiUser} from "react-icons/bi";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">

      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo-shoppify4.png" alt="Shoppify Logo"/>
          </Link>

        </div>

        <div className="container">
          <div className="search">
            <div className="search-input">
              <input type="text" placeholder="Tìm kiếm trên Shoppify"/>
            </div>
            <div className="search-icon">
              <RiFindReplaceLine/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="user-icon">
            <BiUser/>
            <div className="dropdown">
              <ul>
                <li><Link to="/#">Đăng nhập</Link></li>
                <li><Link to="/#">Tài khoản</Link></li>
                <li><Link to="/#">Đơn mua</Link></li>
                <li><Link to="/#">Đăng xuất</Link></li>
              </ul>
            </div>
          </div>

          <div className="cart-icon">
            <AiOutlineHeart/>
          </div>
          <div className="like-icon">
            <BsCart2/>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Header
