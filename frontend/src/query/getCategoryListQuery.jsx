import { API_PRODUCT_BASE_URL } from "./urls";
import axios from "axios";

/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} name
 */

/**
 *
 * @returns {Array[Category]} CategoryList
 */

export const fetchCategoryList = async () => {
  const response = await axios.get(`${API_PRODUCT_BASE_URL}/category`);

  return response.data;
};
