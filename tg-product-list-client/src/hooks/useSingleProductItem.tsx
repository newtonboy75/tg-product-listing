import { useState, useEffect } from "react";
import axiosInterceptor from "../utils/axiosInterceptor";
import { Product } from "../interfaces/ProductInterface";

export const useSingleProductItem = (productId: number) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // const response = await axios.get(`http://localhost:8000/api/v1/products/${productId}`);
                // setProduct(response.data);

                const response = await axiosInterceptor.get(
                    `/product/${productId}`
                );
                setProduct(response.data);
            } catch (err) {
                setError("Failed to fetch product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    return { product, loading, error };
};
