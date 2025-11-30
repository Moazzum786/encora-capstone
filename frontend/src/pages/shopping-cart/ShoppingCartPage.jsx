import {
  useQuery,
  useQueries,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import CartItemRow from "../../components/cartItemRow";
import fetchCart from "../../query/fetchCartQuery";
import { fetchProductById } from "../../query/getProductByIdQuery";
import deleteCartItem from "../../query/deleteCartItemQuery";

function CartPage() {
  const queryClient = useQueryClient();

  const { data: cartData, isLoading: isCartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const productQueries = useQueries({
    queries: (cartData?.items || []).map((item) => ({
      queryKey: ["product", item.productId],
      queryFn: () => fetchProductById(item.productId),
      staleTime: 1000 * 60 * 5,
    })),
  });

  const deleteMutation = useMutation({
    mutationFn: (cartItemId) => deleteCartItem(cartItemId),
    onSuccess: () => queryClient.invalidateQueries(["cart"]),
  });

  const isProductsLoading = productQueries.some((q) => q.isLoading);

  if (isCartLoading || isProductsLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const grandTotal = cartData.items.reduce((total, item, index) => {
    const product = productQueries[index]?.data;
    return product ? total + product.price * item.quantity : total;
  }, 0);

  return (
    <div className="container mx-auto p-6 min-h-screen bg-base-100">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-base-100">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Product</th>
              <th>Configuration</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData.items.map((item, index) => (
              <CartItemRow
                key={index}
                item={item}
                product={productQueries[index].data}
                onRemove={() =>
                  deleteMutation.mutate({
                    productId: item.productId,
                    size: item.size,
                  })
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-end mt-8 gap-4">
        <div className="text-2xl font-bold">
          Total: <span className="text-primary">₹{grandTotal.toFixed(2)}</span>
        </div>
        <button className="btn btn-primary btn-wide text-lg">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
