export type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export interface ProducstInitialType {
  products: product[];
  isLoading: boolean;
  error: null | string;
}
