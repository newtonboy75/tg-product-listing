var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect, useCallback } from "react";
import axiosInterceptor from "../utils/axiosInterceptor";
const useProductList = (page, searchTerm, limit) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const fetchProducts = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            const response = yield axiosInterceptor.get(`/products?page=${page}&limit=${limit}&search=${searchTerm}`);
            const fetchedProducts = response.data.products;
            if (fetchedProducts.length < limit) {
                setHasMore(false);
            }
            else {
                setHasMore(true);
            }
            if (page === 1) {
                setProducts(fetchedProducts);
            }
            else {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...fetchedProducts.filter((product) => !prevProducts.some((p) => p.id === product.id)),
                ]);
            }
            setLoading(false);
        }
        catch (error) {
            console.error("Failed to load products:", error);
            setLoading(false);
        }
    }), [page, searchTerm, limit]);
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    return { products, loading, hasMore };
};
export default useProductList;
