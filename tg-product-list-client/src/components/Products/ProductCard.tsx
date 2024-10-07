import { FC, lazy, SetStateAction, Suspense, useState } from "react";
import heart from "/heart.svg";
import { ProductCardProps } from "../../interfaces/ProductInterface";
import Loading from "./Loading";

const SingleProductPopup = lazy(() => import("./ProductSinglePopup"));

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [itemId, setItemId] = useState(0);

    // Open the popup
    const handleOpenPopup = (id: SetStateAction<number>) => {
        console.log(id);
        setItemId(id);
        setIsPopupOpen(true);
    };

    // Close the popup
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div
                onClick={() => handleOpenPopup(product.id)}
                className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative text-left"
            >
                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <img src={heart} />
                </div>

                <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                    <img
                        src={product.thumbnail}
                        alt="Product 1"
                        className="h-full w-full object-contain"
                    />
                </div>

                <div>
                    <h3 className="text-md font-bold text-[#e06a93]">
                        {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                        {product.description}
                    </p>
                    <h4 className="text-md text-[#e06a93] font-medium mt-4">
                        ${product.price}
                    </h4>
                </div>
            </div>

            {isPopupOpen && (
                <Suspense fallback={<Loading />}>
                    <div className="popup-overlay absolute">
                        <SingleProductPopup
                            itemId={itemId}
                            closePopup={handleClosePopup}
                        />
                    </div>
                </Suspense>
            )}
        </>
    );
};

export default ProductCard;
