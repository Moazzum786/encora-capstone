import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../query/getProductsQuery";

export const useProductsInfinite = (filters) => {
    return useInfiniteQuery({
        queryKey: ["products", filters],

        queryFn: ({ pageParam }) => fetchProducts({ pageParam, filters }),

        initialPageParam: 0,

        getNextPageParam: (lastPage) => {
            if (lastPage.last) {
                return undefined;
            }
            return lastPage.number + 1;
        },
    });
};
