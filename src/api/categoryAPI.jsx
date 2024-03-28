import axios from 'axios';

export const findCategoryList = async () => {
  let response = null;
  try {
    response = await axios.get("http://localhost:8080/api/v1/home/categories/all");
    console.log("Tìm các categories API thành công", response?.data);
  } catch (error) {
    console.error("Tìm các danh mục API lõi: ", error);
    throw error;
  }    return response?.data.data;
};