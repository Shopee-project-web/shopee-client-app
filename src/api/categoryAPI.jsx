import axios from 'axios';

export const findCategoryList = async () => {
  let response = null;
  try {
    response = await axios.get("http://localhost:8080/api/v1/home/categories");
    // console.log("Tìm tất cả danh mục API thành công", response?.data);
  } catch (error) {
    console.error("Tìm tất cả danh mục API lõi: ", error);
    throw error;
  }    return response?.data.data;
};