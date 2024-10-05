import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/Products/ProductList";
const App = () => {
    return (_jsxs("div", { className: "min-h-screen bg-gray-100 flex flex-col", children: [_jsx(Header, {}), _jsx(ProductList, {}), _jsx(Footer, {})] }));
};
export default App;
