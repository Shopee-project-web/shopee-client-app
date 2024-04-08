import React, {useEffect, useState} from 'react'
import "./product.scss"
import {findProductList} from "../../api/productAPI";
import {Link} from "react-router-dom";

function Products({products}) {
  const [show, setShow] = useState(18)

// DATA PRODUCT FAKE
//   useEffect(() => {
//       try {
//         setProducts(fakeProducts);
//         console.log( "Dữ liệu fakeProducts thành công như sau:", fakeProducts)
//       } catch (error) {
//         console.error("Dữ liệu cập nhật xảy ra lõi:", error);
//     };
//   }, []);



  const setCout = (cout) => {
    setShow(cout => cout + 12)
  }

  return (
    <div className="recommended">
      <div className="container">
        <div className="recommended-container">
          <div className="recommended-head">
            <div className="recommended-tab active">
              <div className="recommended-heading">Gợi ý hôm nay</div>
              <div className="line"></div>
            </div>
          </div>
        </div>

        <ul className="recommended-list active">
          {
            products.slice(0, show).map(product => (

              <Link to={`/product/detail/${product.id}`} className="recommended-item-link">

                <li key={product.id} className="recommended-item">
                  <div className="recommended-item-link">
                    {product.productImageList && product.productImageList.length > 0 ? (
                      <img
                        src={product.productImageList[0].url}
                        alt={product.name}
                      />
                    ) : (

                      <div>
                        No Image
                      </div>
                    )}

                    {
                      product.discount ?
                        <div className="recommended-item-label sale">
                          <span>{product.discount}</span>
                          <span>Giảm</span>
                        </div> : null
                    }

                    {
                      product.show_free_shipping && product.liked_count > 10000 ?
                        <div className="recommended-item-ship-xu">
                          <img src="https://cf.shopee.vn/file/461691071df30827265cc48e9b5e76f3" alt=""/>
                        </div> : null
                    }

                    {
                      product.show_free_shipping && product.coin_info === null ?
                        <div className="recommended-item-ship">
                          <img src="https://cf.shopee.vn/file/64cc6e5365663b97de6a51b303be7d35" alt=""/>
                        </div> : null
                    }

                    {
                      product.liked_count > 10000 && !product.show_official_shop_label_in_title ?
                        <div className="recommended-item-wishlist">
                          Yêu thích
                        </div> : null
                    }

                    {
                      product.show_official_shop_label_in_title ?
                        <div className="recommended-item-mall">
                          Mall
                        </div> : null

                    }

                    {
                      product.show_official_shop_label_in_title || product.show_official_shop_label ?
                        <div className="recommended-item-sponsor">
                          Tài trợ
                        </div> : null
                    }
                    <div className="recommended-item-info">
                      <p className="recommended-item-name">
                        {product.name}
                      </p>
                      {
                        product.raw_discount === 50 ?
                          <div className="recommended-item-saleup">
                            <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                              <path
                                d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                strokeWidth="1" transform="" stroke="currentColor" fill="#f69113"></path>
                            </svg>
                            <div>50% giảm</div>
                            <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                              <path
                                d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                strokeWidth="1" transform="rotate(180) translate(-3 -15)" stroke="currentColor"
                                fill="#f69113"></path>
                            </svg>
                          </div> : null
                      }
                      <div className="recommended-item-bottom">
                      <span className="recommended-item-price"><u>đ</u>
                        {Math.ceil(product.price / 1000).toFixed(3)}
                      </span>

                        <span className="recommended-item-sold">
                                            Đã bán
                          {Math.ceil(product.historical_sold / 1000).toFixed(1)}k
                      </span>
                      </div>
                    </div>
                  </div>
                </li>

              </Link>
            ))
          }
        </ul>

        {
          (show < products.length) ?
            <div className="recommended-loadmore">
              <button className="btn"
                      onClick={() => setCout()}>Xem thêm
              </button>
            </div> : null
        }
      </div>
    </div>
  )
}

export default Products
