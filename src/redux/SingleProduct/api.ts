export const getSingleProduct = (id: number) => {
  return fetch(`https://fakestoreapi.com/products/${id}`);
};
