import { useEffect } from "react";
import { ShopHome } from "../components/Shophome/ShopHome";
import { ShopList } from "../components/Shoplist/ShopList";
import { useAppSelector } from "../redux/hooks";

const Shop = () => {
  const error = useAppSelector((state) => state.products.error);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ShopHome />
      {!error && <ShopList />}
    </div>
  );
};

export default Shop;
