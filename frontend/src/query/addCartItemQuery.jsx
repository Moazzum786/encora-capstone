import axios from "axios";
import { API_CART_BASE_URL } from "./urls";

export const addCartItem = async (itemData) => {
  const response = await axios.post(`${API_CART_BASE_URL}/items`, itemData);
  return response.data;
};
