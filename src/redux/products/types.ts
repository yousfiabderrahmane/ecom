export type product = {
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
};

export type cartType = {
  products: product[];
  totalItems: number;
  totalPrice: number;
};

export interface ProducstInitialType {
  products: product[];
  isLoading: boolean;
  error: null | string;
  favoriteProducts: product[];
  cart: cartType;
  filter: string;
}
