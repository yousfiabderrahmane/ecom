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

export const initialReviews = [
  {
    id: 1,
    rating: 4,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    date: new Date().toISOString(),
    title: "This is wholesome",
    isEditable: false,

    content:
      "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese.",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    rating: 2,
    date: new Date().toISOString(),
    isEditable: false,
    title: "I mean, whatever ....",
    content:
      "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps.",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 3,
    name: "Clemthine Rmayn",
    email: "hisdaughter@rmayn.com",
    rating: 5,
    date: new Date().toISOString(),
    isEditable: false,
    title: "Very exclusive !",
    content:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop.",
    photo: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];
