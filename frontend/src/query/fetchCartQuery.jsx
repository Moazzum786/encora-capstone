import { API_CART_BASE_URL } from "./urls";
import axios from "axios";

const fetchCart = async () => {
  const { data } = await axios.get(`${API_CART_BASE_URL}`);
  return data;
};

export default fetchCart;
