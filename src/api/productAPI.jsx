import axios from 'axios';

export const findProductList = async () => {
  let response = null;
  try {
    response = await axios.get("http://localhost:8080/api/v1/home/products");
    // console.log("Tìm tất cả sản phẩm API thành công", response?.data);
  } catch (error) {
    console.error("Tìm tất cả sản phẩm API lõi: ", error);
    throw error;
  }    return response?.data.data;
};

export const findProductById = async (productId) => {
  let response = null;
  try {
    response = await axios.get(`http://localhost:8080/api/v1/home/products/${productId}`);
    // console.log("Tìm tất cả sản phẩm API thành công", response?.data);
  } catch (error) {
    console.error("Tìm tất cả sản phẩm API lõi: ", error);
    throw error;
  }    return response?.data.data;
};

export const findProductByCategoryList = async (categoryId) => {
  let response = null;
  try {
    response = await axios.get("http://localhost:8080/api/v1/home/products/category/${categoryId}");
    console.log("Tìm tất cả sản phẩm theo danh mục API thành công", response?.data);
  } catch (error) {
    console.error("Tìm tất cả sản phẩm theo danh mục API lõi: ", error);
    throw error;
  }    return response?.data.data;
};


