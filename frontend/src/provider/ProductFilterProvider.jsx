import { createContext, useContext, useReducer } from "react";

/**
 * @typedef {Object} FilterState
 * @property {string} searchQuery - The current search string entered by the user.
 * @property {string|null} category - The active product category filter (or null if none).
 * @property {number|null} minPrice - The minimum price filter value (or null if not set).
 * @property {number|null} maxPrice - The maximum price filter value (or null if not set).
 * @property {string|null} sortBy - The current sort criteria (e.g., 'price_asc', 'newest').
 * @property {boolean} inStockOnly - Flag indicating if only in-stock items should be shown.
 * @property {string|null} gender - The active gender filter (e.g., 'Men', 'Women') or null.
 */

/**
 * @typedef {Object} ProductFilterContextValue
 * @property {FilterState} state - The current filter state.
 * @property {string} state.searchQuery - Current search text.
 * @property {string|null} state.category - Selected category or null.
 * @property {number|null} state.minPrice - Minimum price filter.
 * @property {number|null} state.maxPrice - Maximum price filter.
 * @property {string|null} state.sortBy - Current sort order (e.g., 'price_asc').
 * @property {boolean} state.inStockOnly - Whether to show only in-stock items.
 * @property {string|null} state.gender - Selected gender filter.
 *
 * @property {function(string): void} setSearch - Updates the search query.
 * @property {function(Array<string>|null): void} setCategory - Updates the selected category.
 * @property {function(number|null): void} setMinPrice - Updates the minimum price.
 * @property {function(number|null): void} setMaxPrice - Updates the maximum price.
 * @property {function(string|null): void} setSort - Updates the sort order.
 * @property {function(boolean): void} setInStock - Updates the in-stock filter.
 * @property {function(string|null): void} setGender - Updates the gender filter.
 * @property {function(): void} resetFilters - Resets all filters to initial state.
 */

const initialState = {
    searchQuery: null,
    category: null,
    minPrice: null,
    maxPrice: null,
    sortBy: null,
    inStockOnly: false,
    gender: null,
};

function filterReducer(state, action) {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, searchQuery: action.payload };
        case "SET_CATEGORY":
            return { ...state, category: action.payload };
        case "SET_MIN_PRICE":
            return { ...state, minPrice: action.payload };
        case "SET_MAX_PRICE":
            return { ...state, maxPrice: action.payload };
        case "SET_SORT":
            return { ...state, sortBy: action.payload };
        case "SET_IN_STOCK":
            return { ...state, inStockOnly: action.payload };
        case "SET_GENDER":
            return { ...state, gender: action.payload };
        case "RESET_FILTERS":
            return initialState;
        default:
            return state;
    }
}

const ProductFilterContext = createContext();

export function ProductFilterProvider({ children }) {
    const [state, dispatch] = useReducer(filterReducer, initialState);

    const setSearch = (query) =>
        dispatch({ type: "SET_SEARCH", payload: query });
    const setCategory = (category) =>
        dispatch({ type: "SET_CATEGORY", payload: category });
    const setMinPrice = (price) =>
        dispatch({ type: "SET_MIN_PRICE", payload: price });
    const setMaxPrice = (price) =>
        dispatch({ type: "SET_MAX_PRICE", payload: price });
    const setSort = (sort) => dispatch({ type: "SET_SORT", payload: sort });
    const setInStock = (inStock) =>
        dispatch({ type: "SET_IN_STOCK", payload: inStock });
    const setGender = (gender) =>
        dispatch({ type: "SET_GENDER", payload: gender });
    const resetFilters = () => dispatch({ type: "RESET_FILTERS" });

    const value = {
        state,
        setSearch,
        setCategory,
        setMinPrice,
        setMaxPrice,
        setSort,
        setInStock,
        setGender,
        resetFilters,
    };

    console.log(state);

    return (
        <ProductFilterContext.Provider value={value}>
            {children}
        </ProductFilterContext.Provider>
    );
}

/**
 * Hook to access the product filter context.
 * @returns {ProductFilterContextValue} The current filter state and updater functions.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useProductFilter() {
    const context = useContext(ProductFilterContext);
    if (context === undefined) {
        throw new Error(
            "useProductFilter must be used within a ProductFilterProvider",
        );
    }
    return context;
}
