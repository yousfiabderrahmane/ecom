import { useParams } from "react-router-dom";
import womenBg from "../assets/images/womenClothing.jpg";
import menBg from "../assets/images/menClothing.jpg";
import jeweleryBg from "../assets/images/jewelery.jpg";
import electronicsBg from "../assets/images/electronics.jpg";
import { SingleHome } from "../components/Singlehome/SingleHome";

export const SingleCategoryPage = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <SingleHome
      src={
        category === "Jewelery"
          ? jeweleryBg
          : category === "Electronics"
          ? electronicsBg
          : category === "Men"
          ? menBg
          : womenBg
      }
      category={category}
    />
  );
};
