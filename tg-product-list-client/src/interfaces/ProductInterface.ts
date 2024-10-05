export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    price: string;
    category: string;
    brand: string;
    images: string[];
    reviews: any[];
    rating: number;
}

export interface ProductCardProps {
    product: Product;
}

export interface StarRatingProps {
    rating: number;
    totalStars?: number;
}
