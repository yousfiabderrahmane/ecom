import { useEffect } from "react";
import { ShopHome } from "../components/Shophome/ShopHome";
import { ShopList } from "../components/Shoplist/ShopList";

export const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ShopHome />
      <ShopList />
    </div>
  );
};
