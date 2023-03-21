import { product } from "./../products/types";

interface review {
  id: number;
  rating: number;
  name: string;
  email: string;
  date: string;
  title: string;
  isEditable: boolean;

  content: string;
  photo?: string;
}

export type singleProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  isFavorite: boolean;
  quantity: number;
  size: string;
  color: string;
};

export interface SingleProductInitialType {
  SingleProduct: singleProduct;
  isLoading: boolean;
  reviews: review[];
  error: string | null;
  cart: cartType;
}
export type cartType = {
  products: singleProduct[];
  totalItems: number;
  totalPrice: number;
};

export const initialSingleProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  image: "",
  category: "",
  rating: {
    rate: 0,
    count: 0,
  },
  isFavorite: false,
  quantity: 1,
  size: "xl",
  color: "red",
};
