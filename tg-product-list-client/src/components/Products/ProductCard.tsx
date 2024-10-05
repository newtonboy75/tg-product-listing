import { FC } from "react";
import heart from "../../../public/heart.svg";
import { ProductCardProps } from "../../interfaces/ProductInterface";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <>
            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative text-left">
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
        </>
    );
};

export default ProductCard;
