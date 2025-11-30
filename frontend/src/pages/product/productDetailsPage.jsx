import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBag, Star, Heart, Plus, Minus, Truck } from "lucide-react";
import { fetchProductById } from "../../query/getProductByIdQuery";
import { useMutation } from "@tanstack/react-query";
import { addCartItem } from "../../query/addCartItemQuery";
import { toast } from "sonner";

const SORTED_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductDetailsPage = () => {
  const { productId: id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: addCartItem,
    onSuccess: (data) => {
      toast("Item added to cart successfully!");
    },
    onError: (error) => {
      toast.error("Failed to add item to cart.");
      console.error("Add to cart error:", error);
    },
  });

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getVariant = (size) => {
    return product?.variants?.find((v) => v.size === size);
  };

  const maxStock = selectedSize
    ? getVariant(selectedSize)?.stockQuantity || 0
    : 0;

  useEffect(() => {
    setQuantity(1);
  }, [selectedSize]);

  const handleQuantityChange = (type) => {
    if (type === "increment" && quantity < maxStock) {
      setQuantity((prev) => prev + 1);
    }
    if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) return toast("Please select a size");
    mutation.mutate({
      productId: product.id,
      size: selectedSize,
      quantity,
    });
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  if (isError || !product)
    return (
      <div className="min-h-screen flex items-center justify-center text-error">
        Product not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl bg-base-200 aspect-[4/5] border border-base-200">
            <img
              src={product.url || "https://via.placeholder.com/500"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className="badge badge-neutral text-xs uppercase p-3">
                {product.gender} • {product.category?.name}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 pt-2">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold text-base-content leading-tight">
                {product.name}
              </h1>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-2xl font-semibold text-primary">
                ₹{product.price?.toLocaleString()}
              </span>
            </div>
          </div>

          <p className="text-base-content/70 leading-relaxed">
            {product.description}
          </p>

          <div className="divider"></div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold">Select Size</span>
              <span className="text-xs text-primary cursor-pointer hover:underline">
                Size Chart
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {SORTED_SIZES.map((size) => {
                const variant = getVariant(size);
                const available = variant && variant.stockQuantity > 0;

                return (
                  <button
                    key={size}
                    disabled={!available}
                    onClick={() => setSelectedSize(size)}
                    className={`btn btn-md ${
                      selectedSize === size
                        ? "btn-primary"
                        : "btn-outline border-base-300"
                    } ${!available ? "btn-disabled opacity-40" : ""}`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`transition-all duration-300 ${
              selectedSize
                ? "opacity-100 translate-y-0"
                : "opacity-50 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Quantity</span>
              {selectedSize && (
                <span className="text-xs text-base-content/60">
                  {maxStock} items available
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="join border border-base-300 rounded-lg">
                <button
                  className="join-item btn btn-ghost btn-sm px-3 hover:bg-base-200"
                  onClick={() => handleQuantityChange("decrement")}
                  disabled={!selectedSize || quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="join-item w-12 flex items-center justify-center bg-base-100 text-sm font-bold">
                  {quantity}
                </div>
                <button
                  className="join-item btn btn-ghost btn-sm px-3 hover:bg-base-200"
                  onClick={() => handleQuantityChange("increment")}
                  disabled={!selectedSize || quantity >= maxStock}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-lg font-medium text-base-content/80">
                Total:{" "}
                <span className="text-primary">
                  ₹{(product.price * quantity).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              className="btn btn-primary flex-1 btn-lg text-lg"
              disabled={!selectedSize}
            >
              Buy Now
            </button>
            <button
              className="btn btn-outline flex-1 btn-lg text-lg group"
              disabled={!selectedSize}
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Add to Cart
            </button>
          </div>

          <div className="bg-base-200 rounded-xl p-4 flex flex-col gap-3 text-sm mt-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-base-100 rounded-full">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-xs opacity-70">Check your area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
