import React from 'react'
import "./poster.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../asset/img/Poster/1.jpg"
import image2 from "../../asset/img/Poster/2.jpg"
import image3 from "../../asset/img/Poster/3.jpg"
import image1a from "../../asset/img/Poster/1-1.jpg"
import image1b from "../../asset/img/Poster/1-2.jpg"


function Poster() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        }
      },
    ]
  };
  return (
    <div className="poster">
      <div className="container">
        <div className="poster-container">
          <div className="poster-slider">
            <Slider {...settings} className="poster-slider-left">
              <img src={image1} alt="ảnh 1" />
              <img src={image2} alt="ảnh 2" />
              <img src={image3} alt="ảnh 3" />
              {/*<img src="https://cf.shopee.sg/file/cc96df15e9e0ecf15e4e6af098a34e86_xxhdpi" alt="" />*/}
              {/*<img src="https://cf.shopee.sg/file/311205e065170ff5411c99dc076616ae_xxhdpi" alt="" />*/}
              {/*<img src="https://cf.shopee.sg/file/21204006070a1853c94de3bc7aac7ef9_xxhdpi" alt="" />*/}


            </Slider>
            <div className="poster-side">
              <img src={image1a} alt="ảnh 1a" />
              <img src={image1b} alt="ảnh 1b" />


              {/*<img src="https://cf.shopee.sg/file/b4f12530676efc17419261902609ad6c_xhdpi" alt="" />*/}
              {/*<img src="https://cf.shopee.sg/file/c710d0098dccb9d5ac3ba7e1263b0b5e_xhdpi" alt="" />*/}
            </div>
          </div>
          <div className="poster-service">
            <div className="poster-service-item">
              <img src="https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi" alt="" />
              <span>Tech Zone - Siêu Thị Điện Tử</span>
            </div>
            <div className="poster-service-item">
              <img src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi" alt="" />
              <span>Gì Cũng Rẻ - Từ 1K</span>
            </div>
            <div className="poster-service-item">
              <img src="https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi" alt="" />
              <span>Hoàn Xu 20% - Đơn Từ 0Đ</span>
            </div>
            <div className="poster-service-item">
              <img src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi" alt="" />
              <span>Nạp Thẻ, Hóa Đơn & E-voucher</span>
            </div>
            <div className="poster-service-item">
              <img src="https://cf.shopee.vn/file/698f220a98642d9eebf8177db6a08700_xhdpi" alt="" />
              <span>Freeship Xtra Đến 70K Mỗi Ngày</span>
            </div>
            <div className="poster-service-item">
              <img src="https://cf.shopee.vn/file/7971053d6c5db79f83079c7a3d7e6408_xhdpi" alt="" />
              <span>Hàng Hiệu -50% - Voucher -50%</span>
            </div>
            <div className="poster-service-item">
              <img src="	https://cf.shopee.vn/file/29961f92098bc9153b88332110a91c87_xhdpi" alt="" />
              <span>Hàng Quốc Tế - Deal Đồng Giá</span>
            </div>
            <div className="poster-service-item">
              <img src="https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi" alt="" />
              <span>Shopee Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster
