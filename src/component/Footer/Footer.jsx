import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

function Footer() {
  const areaList =[
    {
      id:1,
      name:'Singapore'
    },
    {
      id:2,
      name:'Indonesia'
    },
    {
      id:3,
      name:'Đài Loan'
    },
    {
      id:4,
      name:'Thái Lan'
    },
    {
      id:5,
      name:'Malaysia'
    },
    {
      id:6,
      name:'Việt Nam'
    },
    {
      id:7,
      name:'Philippines'
    },
    {
      id:8,
      name:'Brazil'
    },
    {
      id:9,
      name:'México'
    },
    {
      id:10,
      name:'Colombia'
    },
    {
      id:11,
      name:'Chile'
    },
    {
      id:12,
      name:'Poland'
    },
    {
      id:13,
      name:'Spain'
    },
    {
      id:14,
      name:'France'
    },
  ]

  useEffect(() => {
    const srolltop = document.querySelector('.scroll-top')
    const scroll = window.addEventListener('scroll', event => {
      if(window.scrollY > 300){
        srolltop.classList.add('fixed')
      }else{
        srolltop.classList.remove('fixed')
      }
    })
    return () => window.removeEventListener('scroll',scroll)
  }, [])


  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-grid-item">
              <h3 className="footer-grid-heading">CHĂM SÓC KHÁCH HÀNG</h3>
              <Link to="#" className="footer-grid-link">Trung Tâm Trợ Giúp</Link>
              <Link to="#" className="footer-grid-link">Shopee Blog</Link>
              <Link to="#" className="footer-grid-link">Shopee Mall</Link>
              <Link to="#" className="footer-grid-link">Hướng Dẫn Mua Hàng</Link>
              <Link to="#" className="footer-grid-link">Hướng Dẫn Bán Hàng</Link>
              <Link to="#" className="footer-grid-link">Thanh Toán</Link>
              <Link to="#" className="footer-grid-link">Shopee Xu</Link>
              <Link to="#" className="footer-grid-link">Vận Chuyển</Link>
              <Link to="#" className="footer-grid-link">Trả Hàng & Hoàn Tiền</Link>
              <Link to="#" className="footer-grid-link">Chăm Sóc Khách Hàng</Link>
              <Link to="#" className="footer-grid-link">Chính Sách Bảo Hành</Link>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-grid-heading">VỀ SHOPEE</h3>
              <Link to="#" className="footer-grid-link">Giới Thiệu Về Shopee Việt Nam</Link>
              <Link to="#" className="footer-grid-link">Tuyển Dụng</Link>
              <Link to="#" className="footer-grid-link">Điều Khoản Shopee</Link>
              <Link to="#" className="footer-grid-link">Chính Sách Bảo Mật</Link>
              <Link to="#" className="footer-grid-link">Chính Hãng</Link>
              <Link to="#" className="footer-grid-link">Kênh Người Bán</Link>
              <Link to="#" className="footer-grid-link">Flash Sales</Link>
              <Link to="#" className="footer-grid-link">Chương Trình Tiếp Thị Liên Kết Shopee</Link>
              <Link to="#" className="footer-grid-link">Liên Hệ Với Truyền Thông</Link>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-grid-heading">THANH TOÁN</h3>
              <div className="footer-grid-payment">
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/f1658151314b57fa13811406a2318199.png" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/220px-Mastercard-logo.svg.png" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://seeklogo.com/images/S/shopee-pay-logo-2217CDC100-seeklogo.com.png" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492" alt="" />
                </Link>
              </div>
              <h3 className="footer-grid-heading">ĐƠN VỊ VẬN CHUYỂN</h3>
              <div className="footer-grid-payment">
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://play-lh.googleusercontent.com/ArueGrVaFnMuwS0Ooso4Hvgn7JwYwKj_aKGPyyfJDb7bXJc7pmaRzMDaxcmfLzramPHh" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" alt="" />
                </Link>
                <Link to="#" className="footer-grid-linkp">
                  <img src="https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63" alt="" />
                </Link>
              </div>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-grid-heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
              <Link to="#" className="footer-grid-link social">
                <i className="fab fa-facebook"></i>
                Facebook
              </Link>
              <Link to="#" className="footer-grid-link social">
                <i className="fab fa-instagram"></i>
                Instagram
              </Link>
              <Link to="#" className="footer-grid-link social">
                <i className="fab fa-linkedin"></i>
                Linkedln
              </Link>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-grid-heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
              <Link to="#" className="footer-grid-link app">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="" />
              </Link>
              <Link to="#" className="footer-grid-link app">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="" />
              </Link>
              <Link to="#" className="footer-grid-link app">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyrightArea">
              <div className="footer-copyrightArea-copyright">
                © 2021 Shopee. Tất cả các quyền được bảo lưu.
              </div>
              <div className="footer-copyrightArea-area">
                Quốc gia & Khu vực:
                {
                  areaList.map(language =>(
                    <li key={language.id}>
                      <Link to="#" className="footer-area-language">{language.name}</Link>
                    </li>
                  ))
                }
              </div>
            </div>
            <div className="footer-policy">
              <div className="footer-policy-item">
                <Link to="#">CHÍNH SÁCH BẢO MẬT</Link>
                <Link to="#">QUY CHẾ HOẠT ĐỘNG</Link>
                <Link to="#">CHÍNH SÁCH VẬN CHUYỂN</Link>
                <Link to="#">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</Link>
              </div>
              <div className="footer-policy-alredy">
                <img src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png" alt="" />
                <img src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png" alt="" />
                <img src="https://gentalentsappproduction.s3.ap-southeast-1.amazonaws.com/gentalents.com/Contents/Images/icon-khac-biet-1.png" alt="" />
              </div>
              <span>Công ty TNHH Shopee</span>
            </div>
            <div className="footer-infomation">
              <span>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</span>
              <span>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</span>
              <span>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</span>
              <span>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</span>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="scroll-top">
        <i className="scroll-top-icon fas fa-arrow-up"></i>
      </a>
    </div>

  )
}

export default Footer
