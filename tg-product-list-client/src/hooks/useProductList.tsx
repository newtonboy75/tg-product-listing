import { useState, useEffect, useCallback } from "react";
import axiosInterceptor from "../utils/axiosInterceptor";
import { Product } from "../interfaces/ProductInterface";

const useProductList = (page: number, searchTerm: string, limit: number) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);

            const response = await axiosInterceptor.get(
                `/products?page=${page}&limit=${limit}&search=${searchTerm}`
            );

            const fetchedProducts: Product[] = response.data.products;

            if (fetchedProducts.length < limit) {
                setHasMore(false);
            }else{
                setHasMore(true);
            }

            if (page === 1) {
                
                setProducts(fetchedProducts);
                
            } else {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...fetchedProducts.filter(
                        (product) =>
                            !prevProducts.some((p) => p.id === product.id)
                    ),
                ]);
            }

            setLoading(false);
        } catch (error) {
            console.error("Failed to load products:", error);
            setLoading(false);
        }
    }, [page, searchTerm, limit]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return { products, loading, hasMore };
};

export default useProductList;
