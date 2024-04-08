import React, {useEffect, useState} from 'react'
import "./category.scss"
import {findCategoryList} from "../../api/categoryAPI";

function Category() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findCategoryList();
        setCategories(response);
        console.log( "Dữ liệu cập nhật thành công như sau:", response)
      } catch (error) {
        console.error("Dữ liệu cập nhật xảy ra lõi:", error);
      }
    };

    fetchData();
  }, []);


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
                  categories.map((category)=>(
                  <a key={category.id} href=".#" className="category-content-item">
                    <img src={category.imageUrl} alt="" />
                    <span>{category.name}</span>
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

