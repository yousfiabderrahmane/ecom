import { useEffect } from "react";
import { SingleProductHeader } from "../components/SingleProductHeader/SingleProductHeader";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getSingleProductRequested,
  refreshReviews,
} from "../redux/SingleProduct/singleProductSlice";
import { Loading } from "../components/LoadingGif/Loading";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const randomReduction = Math.ceil(Math.random() * 40);
  const isLoading = useAppSelector((state) => state.singleProduct.isLoading);

  useEffect(() => {
    dispatch(getSingleProductRequested({ id: Number(id) }));
    window.scrollTo(0, 0);

    return () => {
      dispatch(refreshReviews());
    };
  }, [dispatch, id]);
  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SingleProductHeader />
          <SingleProduct randomReduction={randomReduction} />
        </>
      )}
    </section>
  );
};

export default SingleProductPage;
