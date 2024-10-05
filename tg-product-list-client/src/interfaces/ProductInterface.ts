export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    price: string;
    category: string;
  }

  export interface ProductCardProps {
    product: Product;
  }