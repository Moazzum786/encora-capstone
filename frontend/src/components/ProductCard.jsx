export default function ProductCard({ product }) {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            
            <figure className="relative">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="badge badge-primary absolute top-3 left-3">
                    {product.category.toUpperCase()}
                </div>
            </figure>

            <div className="card-body">
                <h2 className="card-title  font-semibold">
                    {product.name}
                </h2>

                <p className="text-sm leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold text-lg text-primary">
                        ${product.price}
                    </span>
                    <span className="text-xs">
                        Stock: {product.qty}
                    </span>
                </div>

                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-neutral btn-sm rounded-full">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
