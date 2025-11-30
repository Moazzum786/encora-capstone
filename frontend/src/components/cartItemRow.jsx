function CartItemRow({ item, product, onRemove }) {
  if (!product) return null;

  const lineTotal = (product.price * item.quantity).toFixed(2);

  return (
    <tr className="hover:bg-base-200/30">
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16 bg-base-300">
              <img src={product.url} alt={product.name} />
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">{product.name}</div>
            <div className="badge badge-ghost badge-sm mt-1">
              {product.category?.name}
            </div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex flex-col gap-1">
          <span className="text-sm">
            Size:{" "}
            <span className="badge badge-sm badge-outline font-bold">
              {item.size}
            </span>
          </span>
          <span className="text-sm">
            Qty: <span className="font-bold">{item.quantity}</span>
          </span>
        </div>
      </td>

      <td>
        <div className="flex flex-col">
          <span className="font-bold text-lg">₹{lineTotal}</span>
          <span className="text-xs opacity-50">₹{product.price} each</span>
        </div>
      </td>

      <th>
        <button
          onClick={onRemove}
          className="btn btn-square btn-ghost text-error btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
}

export default CartItemRow;
