import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/Products/ProductList";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
};

export default App;
