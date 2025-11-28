import ProductCard from "../components/ProductCard";
import ProductFilterSidebarWithContent from "../components/ProductFilters";

export default function ProductsPage() {
    return (
        <div className="bg-base-200 flex-1 py-10 px-6 lg:px-20 animate-fadeIn">
            {/* Filters */}
            <ProductFilterSidebarWithContent />
        </div>
    );
}
