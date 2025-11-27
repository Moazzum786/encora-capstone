export default function ProductFilters() {
    return (
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <select className="select select-bordered w-full sm:w-48">
                <option disabled selected>Category</option>
                <option>Women</option>
                <option>Men</option>
                <option>Accessories</option>
            </select>

            <select className="select select-bordered w-full sm:w-48">
                <option disabled selected>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>

            <select className="select select-bordered w-full sm:w-48">
                <option disabled selected>Sort By</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
                <option>Newest</option>
            </select>
        </div>
    );
}
