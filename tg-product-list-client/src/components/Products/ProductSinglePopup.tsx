import { useEffect } from "react";
import { useSingleProductItem } from "../../hooks/useSingleProductItem";
import close from "/close.svg";
import review from "/review.svg";
import ProductRatings from "./ProductRatings";

const ProductSinglePopup = ({ itemId, closePopup }) => {
    const { product, loading, error } = useSingleProductItem(itemId);

    useEffect(() => {
        console.log(product);
    }, [[product]]);

    return (
        <>
            <div
                onClick={closePopup}
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
            >
                {error && (<div>{error}</div>)}
                {!loading && (
                    <div className="w-full max-w-screen-md bg-white shadow-lg rounded-lg p-6 relative">
                        <div className="flex items-center pb-3  border-gray-300">
                            <h3 className="text-gray-800 text-xl font-bold flex-1"></h3>
                            <img
                                className="w-3 h-3"
                                src={close}
                                onClick={closePopup}
                            />
                        </div>

                        <div className="my-6">
                            <div className="font-sans">
                                <div className="grid items-start grid-cols-1 lg:grid-cols-2">
                                    <div className=" lg:sticky top-0">
                                        <div>
                                            <div>
                                                <img
                                                    src={product.thumbnail}
                                                    alt="Product"
                                                    className="w-full  object-top"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-8 max-lg:max-w-2xl">
                                        <div>
                                            <h2 className="text-2xl font-extrabold text-gray-800">
                                                {product.title}
                                            </h2>
                                            <p className="text-sm text-gray-400 mt-2">
                                                {product.brand}
                                            </p>
                                        </div>

                                        <div className="flex space-x-1 mt-4 items-center justify-center">
                                            <div>
                                                <ProductRatings
                                                    rating={product.rating}
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4"
                                            >
                                                <img
                                                    src={review}
                                                    className="w-3 h-3 mr-2"
                                                />{" "}
                                                {product.reviews.length} Reviews
                                            </button>
                                        </div>

                                        <div className="mt-8">
                                            <p className="text-gray-800 text-4xl font-bold">
                                                ${product.price}
                                            </p>
                                        </div>

                                        <div className="mt-8 text-left">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">
                                                    Product Description
                                                </h3>
                                                <p className="text-sm text-gray-800 mt-4">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                            <button
                                onClick={closePopup}
                                type="button"
                                className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductSinglePopup;
