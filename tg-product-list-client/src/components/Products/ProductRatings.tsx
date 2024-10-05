import { FC } from "react";
import { StarRatingProps } from "../../interfaces/ProductInterface";
import starFilled from "../../../public/star_yellow.svg";
import starEmpty from "../../../public/star_gray.svg";

const ProductRatings: FC<StarRatingProps> = ({ rating }) => {
    const maxStars = Math.round(rating);

    const stars = Array.from({ length: 5 }, (_, index) => {
        const star = index + 1;
        return (
            <img
                className="w-5 h-5"
                key={index}
                src={star <= maxStars ? starFilled : starEmpty}
                alt={star <= maxStars ? "Filled star" : "Empty star"}
            />
        );
    });

    return <div className="flex items-center justify-start">{stars}</div>;
};

export default ProductRatings;
