import { useEffect } from "react";
import { SingleProductHeader } from "../components/SingleProductHeader/SingleProductHeader";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useEffect(() => {});
  return (
    <section>
      <SingleProductHeader />
    </section>
  );
};

export default SingleProductPage;
