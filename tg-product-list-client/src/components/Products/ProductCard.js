import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import heart from "../../../public/heart.svg";
const ProductCard = ({ product }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative text-left", children: [_jsx("div", { className: "bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4", children: _jsx("img", { src: heart }) }), _jsx("div", { className: "w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4", children: _jsx("img", { src: product.thumbnail, alt: "Product 1", className: "h-full w-full object-contain" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-md font-bold text-[#e06a93]", children: product.title }), _jsx("p", { className: "text-gray-600 text-sm mt-2", children: product.description }), _jsxs("h4", { className: "text-md text-[#e06a93] font-medium mt-4", children: ["$", product.price] })] })] }) }));
};
export default ProductCard;
