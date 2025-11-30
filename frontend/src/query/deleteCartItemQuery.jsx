import { API_CART_BASE_URL } from "./urls";
import axios from "axios";

async function deleteCartItem({ productId, size }) {
  const response = await axios.delete(
    `${API_CART_BASE_URL}/items/${productId}`,
    { params: { size } }
  );
  return response.data;
}

export default deleteCartItem;
