import React from 'react'
import "../../css/Footer.css"
import {FaFacebook, FaInstagramSquare, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">

          <div>
            <h5>CHĂM SÓC KHÁCH HÀNG</h5>
            <p>Trung Tâm Trợ Giúp</p>
            <p>Shoppify Blog</p>
            <p>Shoppify Mall</p>
            <p>Hướng Dẫn Mua Hàng</p>
            <p>Hướng Dẫn Bán Hàng</p>
            <p>Thanh Toán</p>
            <p>Shoppify Xu</p>
            <p>Vận Chuyển</p>
            <p>Trả Hàng & Hoàn Tiền</p>
            <p>Chăm Sóc Khách Hàng</p>
            <p>Chính Sách Bảo Hành</p>
          </div>

          <div>
            <h5>VỀ SHOPPIFY</h5>
            <p>Giới Thiệu Về Shoppify Việt Nam</p>
            <p>Tuyển Dụng</p>
            <p>Điều Khoản Shoppify</p>
            <p>Chính Sách Bảo Mật</p>
            <p>Chính Hãng</p>
            <p>Kênh Người Bán</p>
            <p>Flash Sales</p>
            <p>Chương Trình Tiếp Thị Liên Kết Shoppify</p>
            <p>Liên Hệ Với Truyền Thông</p>
          </div>


          {/*<div>*/}

          <div>
            <h5>THANH TOÁN</h5>
            <ul className="image-list">
              <li><img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo"/>
              </li>
              <li><img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="logo"/>
              </li>
              <li><img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt=""/></li>

            </ul>
            <ul className="image-list">
              <li><img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt=""/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt=""/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" alt=""/></li>

            </ul>

            <ul className="image-list">
              <li><img src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06" alt=""/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492" alt=""/></li>
            </ul>

          </div>
          <div>
            <h5>ĐƠN VỊ VẬN CHUYỂN </h5>
            <ul className="image-list">
              <li><img src="https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185"
                       alt="logo"/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2" alt="logo"/>
              </li>
              <li><img src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6"
                       alt=""/></li>

            </ul>
            <ul className="image-list">
              <li><img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" alt=""/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" alt=""/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" alt=""/></li>

            </ul>

            <ul className="image-list">
              <li><img src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5" alt=""/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" alt=""/></li>
              <li><img src="https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63" alt=""/></li>
            </ul>

          </div>
        {/*</div>*/}
        <div>
          <h5>THEO DÕI CHÚNG TÔI TRÊN</h5>
          <p><FaFacebook className="logo-icon"/>
            Facebook
          </p>
          <p><FaInstagramSquare className="logo-icon"/>Instagram</p>
          <p><FaLinkedin className="logo-icon"/>LinkedIn</p>
        </div>


        </div>
      </div>
    </div>

  )
}

export default Footer
