import React, { FC, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import useProductList from "../../hooks/useProductList";
import { useDebounce } from "../../hooks/useDebounce";
import Loading from "./Loading";
import reset from "/reset.svg";

const ProductList: FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState<number>(1);
    const limit = 12;
    const inputSearchRef = useRef<HTMLInputElement>(null);

    const debouncedSearchTerm = useDebounce(searchTerm, 400);
    const { products, loading, hasMore } = useProductList(
        page,
        debouncedSearchTerm,
        limit
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setPage(1); // Reset to first page
    };

    const handleClear = () => {
        if (inputSearchRef.current && inputSearchRef.current.value !== "") {
            inputSearchRef.current.value = "";
            setSearchTerm("");
            setPage(1);
        }
    };

    const loadMoreProducts = () => {
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <>
            <div className="container mx-auto px-10 lg:px-24 lg:py-10 p-4 text-center">
                <div className="relative lg:w-5/6 mx-auto mb-10">
                    <input
                        className="appearance-none h-16 border pl-10 border-gray-100 hover:border-gray-100 transition-colors rounded-full w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-[#e06a93] focus:shadow-outline"
                        type="text"
                        placeholder="Search Products"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        ref={inputSearchRef}
                    />
                    <div
                        className="absolute right-0 inset-y-0 flex items-center p-4"
                        onClick={handleClear}
                    >
                        {inputSearchRef.current &&
                            inputSearchRef.current.value !== "" && (
                                <img
                                    src={reset}
                                    title="Reset"
                                    className="w-4 h-4"
                                />
                            )}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-28">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {loading && <Loading />}

                {!loading && hasMore && (
                    <button
                        onClick={loadMoreProducts}
                        className="mt-8 px-4 py-2 bg-[#e06a93] text-white rounded-full"
                    >
                        Load more
                    </button>
                )}

                {!loading && !hasMore && (
                    <p className="mt-8 text-gray-500">
                        No more products to load.
                    </p>
                )}
            </div>
        </>
    );
};

export default ProductList;
