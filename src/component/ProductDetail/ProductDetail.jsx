import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import "./product.scss"
import "./ProductImages.css"
import 'react-toastify/dist/ReactToastify.css';

import {MdStarRate} from "react-icons/md";

import {findProductById} from "../../api/productAPI";
import axios from "axios";
import {toast, ToastContainer } from "react-toastify";

function ProductDetail() {

    const [product, setProduct] = useState({});
    const {productId} = useParams();
    const navigate = useNavigate();

// ----------------------------------------------
    const getProductData = async (productId) => {
        try {
            const response = await findProductById(productId);
            setProduct(response);
            console.log("Dữ liệu cập nhật thành công như sau:", response)
        } catch (error) {
            console.error("Dữ liệu cập nhật xảy ra lõi:", error);
        }
    };

    useEffect(() => {
        console.log("id truyền vào:" + productId);
        getProductData(productId);
    }, [productId]);

// ----------------------------------------------
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) { // Check if ESC key is pressed
                handleCloseModal();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
// ----------------------------------------------
    // Tạo state để lưu trữ trạng thái của mỗi ô MÀU SẮC
    const [selectedColor, setSelectedColor] = useState(null);

    // Tạo state để lưu trữ trạng thái của mỗi ô KÍCH CỠ
    const [selectedSize, setSelectedSize] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const addToCart = async () => {
        const cartItem = {
            productId: product.id,
            name: product.name,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            price: product.price,
        };

            const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/login");
        }
        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/home/cart/add-to-cart",
                cartItem,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success( response.data.message );
            // console.log(response.data.message)

            setTimeout(() => {
                toast.dismiss();
            }, 15000);
        } catch (e) {
            toast.error(e.response.data || "Sản phẩm đã thêm vào giỏ hàng thất bại.");
            toast.error(e.response );
            console.error('Lỗi thêm sản phẩm vào giỏ hàng:', e);
            console.log(e.response.data.message)
            toast.error(e.response.data.message)
        }

    }

    return (
        <div className="recommended">
            <div className="container">

                <div className="recommended-container">
                    <div className="recommended-head">
                        <div className="recommended-tab active">
                            <div className="recommended-heading">Thông tin sản phẩm</div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', padding: '20px'}}>

                    {/* Cột chứa hình ảnh */}
                    <div style={{flex: 1}}>
                        <div>
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%', // Chiều cao cố định khung chứa ảnh
                                overflow: 'hidden',
                            }}>
                                {product.productImageList && product.productImageList.length > 0 ? (
                                    <img
                                        src={product.productImageList[0].url}
                                        alt={product.name}
                                        style={{
                                            margin: 'auto',
                                            width: '96%',
                                            height: '96%', // ảnh đầy đủ kích thước trong khung chứa
                                            objectFit: 'contain', // hiển thị trong khung mà không bị cắt hoặc biến dạng, toàn bộ hình ảnh sẽ hiển thị mà không bị thiếu
                                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.3)', // Đổ bóng quanh ảnh
                                            border: '1px solid #ee4d2d',
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#ccc',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#666',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            boxShadow: '0 0 6px rgb(232, 11, 11)',
                                        }}
                                    >
                                        No Image
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div
                                    style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                                    {product.productImageList && product.productImageList.length > 0 ? (
                                        product.productImageList.map((image, index) => (
                                            <img className="category-content-item"
                                                 key={index}
                                                 src={image.url}
                                                 alt={product.name}
                                                 style={{
                                                     margin: '10px',
                                                     width: '90px',
                                                     height: '90px',
                                                     objectFit: 'contain',
                                                     cursor: 'pointer',
                                                     marginBottom: '12px',
                                                     transition: 'box-shadow 0.9s ease', // Thêm transition cho hiệu ứng mượt mà
                                                     // boxShadow: '0 0 6px rgb(232, 11, 11)', // Đổ bóng quanh ảnh
                                                 }}
                                                 onClick={() => handleImageClick(image.url)}
                                            />
                                        ))
                                    ) : (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: '#ccc',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: '#666',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            No Image
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Modal Overlay */}
                            {selectedImage && (
                                <div className="modal-overlay"
                                     onClick={handleCloseModal}>
                                    <div className="modal-content"
                                         onClick={(e) => e.stopPropagation()}>
                                        <img src={selectedImage}
                                             alt={product.name}
                                             className="modal-image"/>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center items-center" style={{marginTop: "15px"}}>
                            <div className="flex items-center idmlsn">
                                <div className="rhG6k7">Chia sẻ:</div>
                                <button className="sprite-product-sharing sprite-product-sharing-fm Vo8Ebs"
                                        aria-label="Share on Messenger"></button>
                                <button className="sprite-product-sharing sprite-product-sharing-fb Vo8Ebs"
                                        aria-label="Share on Facebook"></button>
                                <button className="sprite-product-sharing sprite-product-sharing-pinterest Vo8Ebs"
                                        aria-label="Share on Pinterest"></button>
                                <button className="sprite-product-sharing sprite-product-sharing-twitter Vo8Ebs"
                                        aria-label="Share on Twitter"></button>
                            </div>
                            <div className="flex items-center feDSnr">
                                <button className="w2JMKY" tabIndex="0">
                                    <svg width="24" height="20" className="vgMiJB">
                                        <path
                                            d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                            stroke="#FF424F" stroke-width="1.5" fill="none" fill-rule="evenodd"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                    <div className="rhG6k7">Đã thích (11,9k)</div>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Cột chứa các thông tin còn lại */}
                    <div style={{flex: 1, margin: '20px'}}>
                        {product.variantList && product.variantList.length > 0 && (
                            <div className="product-details">

                                <p className="product-name"
                                   style={{
                                       // fontWeight: 'bold',
                                       color: '#4c4a4a',
                                       // marginBottom: '5px',
                                       fontSize: '2.7em',
                                       // textAlign: 'left',
                                       // height: '3em',
                                       // overflow: 'hidden'
                                   }}>
                                    {product.name || "Đang cập nhật"}
                                </p>

                                <p className="product-price"
                                   style={{
                                       color: '#e44d26',
                                       textAlign: 'left',
                                       fontSize: '3.4em',
                                       fontWeight: 'bold'
                                   }}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(product.price || 0)}
                                </p>

                                <div style={{display: 'flex', alignItems: 'center'}}>

                                    <p className="product-star"
                                       style={{
                                           color: '#ebbe01',
                                           textAlign: 'left',
                                           fontSize: '1.2em',
                                           fontWeight: 'bold',
                                           display: 'flex'
                                       }}>
                                        {Array.from({length: product.star}, (_, index) => (
                                            <MdStarRate key={index} style={{marginRight: '2px', fontSize: '2em',}}/>
                                        ))}
                                    </p>

                                    <p className="product-star"
                                       style={{
                                           color: '#090909',
                                           textAlign: 'left',
                                           fontSize: '1.5em',
                                           display: 'flex',
                                           textDecoration: 'underline' // Thêm gạch dưới chân chữ
                                       }}> (168)
                                    </p>
                                </div>
                                <br/>


                                <div>
                                    <p className="product-description"
                                       style={{
                                           color: '#51514d',
                                           fontSize: '16px',
                                           lineHeight: '24px'

                                       }}>
                                        {product.description}
                                    </p>
                                </div>

                                <hr style={{margin: '10px 0'}}/>
                                {/* Đường kẻ ngang */}

                                <div className="product-details"
                                     style={{display: '', justifyContent: 'space-between'}}>

                                    <p className="product-size"
                                       style={{marginBottom: '5px', fontSize: '16px', color: '#51514d'}}>
                                        MÀU SẮC: &nbsp;
                                        {selectedColor && <span>{selectedColor}</span>}
                                    </p>

                                    <p className="product-size"
                                       style={{marginBottom: '0px', display: 'flex', alignItems: 'center'}}>
                                        {Array.from(new Set(product.variantList.map(variant => variant.colorResponse ? variant.colorResponse.name : 'N/A'))).map((colorName, index) => (
                                            <span key={index}
                                                  style={{
                                                      display: 'flex',
                                                      width: '45px', // Đặt kích thước lớn hơn để làm cho ô kích thước to hơn
                                                      height: '25px', // Đặt kích thước lớn hơn để làm cho ô kích thước to hơn
                                                      marginRight: '5px',
                                                      // marginBottom: '12px',
                                                      padding: '5px', // Thêm padding để tạo khoảng cách giữa chữ và khung vuông xám
                                                      border: '1px solid #ccc', // Khung vuông xám
                                                      justifyContent: 'center', // Căn giữa theo chiều ngang
                                                      alignItems: 'center', // Căn giữa theo chiều dọc
                                                      fontSize: '12px',
                                                      cursor: 'pointer', // con chuột di chuyển vào hiện ngón tay
                                                      // borderRadius: '10%', // Đặt viền cong cho ô kích thước
                                                      boxShadow: selectedColor === colorName ? '0 0 6px rgb(232, 11, 11)' : 'none', // Thêm hiệu ứng shadow khi kích thước được chọn
                                                      transition: 'box-shadow 0.2s ease-in-out',// Thêm hiệu ứng chuyển đổi
                                                      textAlign: 'center', // Căn giữa chữ trong ô
                                                      color: '#51514d',
                                                  }}
                                                // Xử lý sự kiện khi nhấp vào ô kích thước
                                                  onClick={() => setSelectedColor(colorName)}> {colorName}
                                            </span>

                                        ))}
                                    </p>
                                </div>
                                <br/>

                                <div className="product-details"
                                     style={{display: '', justifyContent: 'space-between'}}>

                                    <p className="product-size"
                                       style={{marginBottom: '5px', fontSize: '16px', color: '#51514d',}}>
                                        KÍCH CỠ: &nbsp;
                                        {selectedSize && <span>{selectedSize}</span>}
                                    </p>

                                    <p className="product-size"
                                       style={{marginBottom: '0px', display: 'flex', alignItems: 'center'}}>
                                        {Array.from(new Set(product.variantList.map(variant => variant.sizeResponse ? variant.sizeResponse.name : 'N/A'))).map((sizeName, index) => (
                                            <span key={index}
                                                  style={{
                                                      display: 'flex',
                                                      width: '45px', // Đặt kích thước lớn hơn để làm cho ô kích thước to hơn
                                                      height: '25px', // Đặt kích thước lớn hơn để làm cho ô kích thước to hơn
                                                      marginRight: '5px',
                                                      // marginBottom: '12px',
                                                      padding: '5px', // Thêm padding để tạo khoảng cách giữa chữ và khung vuông xám
                                                      border: '1px solid #ccc', // Khung vuông xám
                                                      justifyContent: 'center', // Căn giữa theo chiều ngang
                                                      alignItems: 'center', // Căn giữa theo chiều dọc
                                                      fontSize: '12px',
                                                      cursor: 'pointer', // con chuột di chuyển vào hiện ngón tay
                                                      // borderRadius: '50%', // Đặt viền cong cho ô kích thước
                                                      boxShadow: selectedSize === sizeName ? '0 0 6px rgb(232, 11, 11)' : 'none', // Thêm hiệu ứng shadow khi kích thước được chọn
                                                      transition: 'box-shadow 0.2s ease-in-out', // Thêm hiệu ứng chuyển đổi
                                                      color: '#51514d',
                                                  }}
                                                // Xử lý sự kiện khi nhấp vào ô kích thước
                                                  onClick={() => setSelectedSize(sizeName)}> {sizeName}
                                             </span>

                                        ))}
                                    </p>
                                </div>
                                <br/>

                                <div>
                                    <p className="product-stock"
                                       style={{marginBottom: '5px', fontSize: '14px', color: '#51514d',}}>
                                        SỐ LƯỢNG:
                                    </p>
                                    <select
                                        name="stock"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        style={{
                                            fontSize: '16px', // Tăng kích thước chữ
                                            padding: '10px', // Tăng padding để tăng kích thước nút select
                                            marginTop: '5px', // Cách lề trên
                                            boxShadow: '0 0 6px rgb(232, 11, 11)',
                                            color: '#51514d',
                                        }}
                                    >
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>

                                        {/*{[...Array(product.stock).keys()].map((num) => (*/}
                                        {/*  <option key={num + 1} value={num + 1}>{num + 1}</option>*/}
                                        {/*))}*/}
                                    </select>

                                </div>

                                <p className="product-size"
                                   style={{
                                       marginBottom: '3px',
                                       display: 'flex',
                                       alignItems: 'center',
                                       color: product.stock === 0 ? 'red' : 'blue'
                                   }}>
                                    {product.stock === 0 ? "Hết hàng" : (product.stock < 10 ? "Còn hàng ít" : "Còn hàng nhiều")}
                                </p>

                            </div>
                        )}
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <button
                                type="button"
                                onClick={addToCart}
                                className="category-content-item"
                                style={{
                                    width: "calc(50% - 12.5px)", // Sử dụng calc để tính toán chiều rộng chính xác, trừ đi margin
                                    backgroundColor: '#f3e0e0',
                                    color: '#ee4d2d',
                                    marginTop: "15px",
                                    whiteSpace: 'nowrap',
                                    fontSize: '16px',
                                    padding: '5px 20px',
                                    border: '1px solid #e80b0b',
                                    boxSizing: 'border-box', // Đảm bảo kích thước tính cả border và padding
                                    height: "60px",
                                    justifyContent: 'center', // Canh giữa theo hàng


                                }}
                            >
                                Thêm vào giỏ hàng
                            </button>

                            <button
                                // onClick={handleCreate}
                                type="button"
                                className="category-content-item"
                                style={{
                                    width: "calc(50% - 12.5px)", // Sử dụng calc để tính toán chiều rộng chính xác, trừ đi margin
                                    backgroundColor: '#ee4d2d',
                                    color: '#fff',
                                    marginTop: "15px",
                                    whiteSpace: 'nowrap',
                                    fontSize: '16px',
                                    padding: '5px 20px',
                                    border: 'none', // Loại bỏ đường viền
                                    boxSizing: 'border-box', // Đảm bảo kích thước tính cả border và padding
                                    justifyContent: 'center', // Canh giữa theo hàng
                                }}
                            >
                                Mua ngay
                            </button>
                        </div>


                    </div>
                </div>

                <div className="recommended-container">
                    <div className="recommended-head">
                        <div className="recommended-tab2 active">
                            <div className="line2"></div>
                            <div className="recommended-heading">Shopee đảm bảo trả hàng miễn phí 15 ngày</div>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer position="top-right"
                            style={{ marginTop: '130px' }}
                            toastStyle={{ fontSize: '14px' }}/>
        </div>

    )
}

export default ProductDetail
