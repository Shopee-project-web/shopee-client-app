import React from 'react'
import "./category.scss"
function Category() {
  const categoryLisst = [
    {
      id:1,
      name:'Thời Trang Nam',
      img:'https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn'
    },
    {
      id:2,
      name:'Điện Thoại & Phụ Kiện',
      img:'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
    },
    {
      id:3,
      name:'Thiết Bị Điện Tử',
      img:'https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn'
    },
    {
      id:4,
      name:'Máy Tính & Laptop',
      img:'https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn'
    },
    {
      id:5,
      name:'Máy Ảnh & Máy Quay Phim',
      img:'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn'
    },
    {
      id:6,
      name:'Đồng Hồ',
      img:'https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn'
    },
    {
      id:7,
      name:'Giày Dép Nam',
      img:'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn'
    },
    {
      id:8,
      name:'Thiết Bị Điện Gia Dụng',
      img:'https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn'
    },
    {
      id:9,
      name:'Thể Thao & Du Lịch',
      img:'https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn'
    },
    {
      id:10,
      name:'Ô Tô & Xe Máy & Xe Đạp',
      img:'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn'
    },
    {
      id:11,
      name:'Thời Trang Nữ',
      img:'	https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn'
    },
    {
      id:12,
      name:'Mẹ & Bé',
      img:'https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn'
    },
    {
      id:13,
      name:'Nhà Cửa & Đời Sống',
      img:'https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn'
    },
    {
      id:14,
      name:'Sắc Đẹp',
      img:'https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn'
    },
    {
      id:15,
      name:'Sức Khỏe',
      img:'https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn'
    },
    {
      id:16,
      name:'Giày Dép Nữ',
      img:'https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn'
    },
    {
      id:17,
      name:'Túi Ví Nữ',
      img:'https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn'
    },
    {
      id:18,
      name:'Phụ Kiện & Trang Sức Nữ',
      img:'https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn'
    },
    {
      id:19,
      name:'Bách Hóa Online',
      img:'https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn'
    },
    {
      id:20,
      name:'Nhà Sách Online',
      img:'https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn'
    },
  ]

  return (
    <div className="category">
      <div className="container">
        <div className="category-container">
          <img src="https://cf.shopee.sg/file/204ca3ec83981dbfa455adbe11776a1c" alt="" />
          <div className="category-mobile">
            <img src="https://cf.shopee.vn/file/970496be55c0747e409e066d9ed042e3" alt="" />
            <img src="https://cf.shopee.vn/file/6da0361e0465bc973ea753259bc33a2c" alt="" />
            <img src="https://cf.shopee.vn/file/c4529282095e29e5b82f3c5b9a25bfad" alt="" />
          </div>
          <div className="category-content">
            <h3 className="category-content-heading">Danh mục</h3>
            <div className="category-content-list">
              {
                categoryLisst.map((item,index)=>(
                  <a key={item.id} href=".#" className="category-content-item">
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category

