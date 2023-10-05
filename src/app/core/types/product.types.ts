export type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  rating: number;
  stock: number;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
