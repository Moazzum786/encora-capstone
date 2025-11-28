import { useProductFilter } from "../provider/ProductFilterProvider";
import CategorySelectComponent from "./categorySelectComponent";
import GenderSelectComponent from "./genderSelectComponent";
import Input from "./inputWithOnChange";
import InStockFilter from "./inStockFilterComponent";
import ProductDisplayGrid from "./productGrid";
import SearchInput from "./searchInput";
import SortSelectComponent from "./sortSelectComponent";

// export default function ProductFilterBar() {
//     const { setInStock, setMinPrice, setMaxPrice } = useProductFilter();
//     return (
//         <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
//             <SearchInput />
//             <CategorySelectComponent />
//             <GenderSelectComponent />
//             <SortSelectComponent />
//             <InStockFilter onChange={setInStock} />
//             <Input
//                 type={"number"}
//                 placeholder={"minPrice"}
//                 onChange={setMinPrice}
//             />
//             <Input
//                 type={"number"}
//                 placeholder={"maxPrice"}
//                 onChange={setMaxPrice}
//             />
//         </div>
//     );
// }

export default function ProductFilterSidebarWithContent() {
    const { setInStock, setMinPrice, setMaxPrice, state } = useProductFilter();

    return (
        <div className="drawer">
            <input
                id="filter-drawer"
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content flex flex-col gap-4">
                <label
                    htmlFor="filter-drawer"
                    className="btn drawer-button z-500 sticky top-10 border-white w-min"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="lucide lucide-menu-icon lucide-menu"
                    >
                        <path d="M4 5h16" />
                        <path d="M4 12h16" />
                        <path d="M4 19h16" />
                    </svg>
                </label>
                <ProductDisplayGrid />
            </div>

            <div className="drawer-side z-501">
                <label
                    htmlFor="filter-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <div className="bg-base-200 min-h-full w-80 p-4">
                    <h2 className="text-xl font-bold mb-6">Filters</h2>

                    <div className="flex flex-col gap-4">
                        {/* Search - Most immediate action */}
                        <div>
                            <label className="text-sm font-semibold mb-2 block">
                                Search
                            </label>
                            <SearchInput />
                        </div>

                        <div className="divider"></div>

                        {/* Sort - Common quick refinement */}
                        <div>
                            <label className="text-sm font-semibold mb-2 block">
                                Sort By
                            </label>
                            <SortSelectComponent />
                        </div>

                        <div className="divider"></div>

                        {/* Category - Primary filter */}
                        <div>
                            <label className="text-sm font-semibold mb-2 block">
                                Category
                            </label>
                            <CategorySelectComponent />
                        </div>

                        {/* Gender - Secondary classification */}
                        <div>
                            <label className="text-sm font-semibold mb-2 block">
                                Gender
                            </label>
                            <GenderSelectComponent />
                        </div>

                        <div className="divider"></div>

                        {/* Price Range - Frequently used filter */}
                        <div>
                            <label className="text-sm font-semibold mb-2 block">
                                Price Range
                            </label>
                            <div className="flex flex-col gap-2">
                                <Input
                                    type={"number"}
                                    placeholder={"Min Price"}
                                    onChange={setMinPrice}
                                    value={state.minPrice ?? ""}
                                />
                                <Input
                                    type={"number"}
                                    placeholder={"Max Price"}
                                    onChange={setMaxPrice}
                                    value={state.maxPrice ?? ""}
                                />
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* In Stock - Secondary toggle filter */}
                        <div>
                            <InStockFilter onChange={setInStock} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
