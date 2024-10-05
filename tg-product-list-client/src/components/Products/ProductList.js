import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import useProductList from "../../hooks/useProductList";
import { useDebounce } from "../../hooks/useDebounce";
import Loading from "./Loading";
import reset from "/reset.svg";
const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const limit = 12;
    const inputSearchRef = useRef(null);
    const debouncedSearchTerm = useDebounce(searchTerm, 400);
    const { products, loading, hasMore } = useProductList(page, debouncedSearchTerm, limit);
    const handleSearchChange = (e) => {
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
    return (_jsxs("div", { className: "container mx-auto px-10 lg:px-24 lg:py-10 p-4 text-center", children: [_jsxs("div", { className: "relative lg:w-5/6 mx-auto mb-10", children: [_jsx("input", { className: "appearance-none h-16 border pl-10 border-gray-100 hover:border-gray-100 transition-colors rounded-full w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-[#e06a93] focus:shadow-outline", type: "text", placeholder: "Search Products", value: searchTerm, onChange: handleSearchChange, ref: inputSearchRef }), _jsx("div", { className: "absolute right-0 inset-y-0 flex items-center p-4", onClick: handleClear, children: _jsx("img", { src: reset, title: "Reset", className: "w-4 h-4" }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-28", children: products.map((product) => (_jsx(ProductCard, { product: product }, product.id))) }), loading && _jsx(Loading, {}), !loading && hasMore && (_jsx("button", { onClick: loadMoreProducts, className: "mt-8 px-4 py-2 bg-[#e06a93] text-white rounded-full", children: "Load more" })), !loading && !hasMore && (_jsx("p", { className: "mt-8 text-gray-500", children: "No more products to load." }))] }));
};
export default ProductList;
