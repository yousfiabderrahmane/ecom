import { useEffect } from "react";
import { SingleProductHeader } from "../components/SingleProductHeader/SingleProductHeader";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSingleProductRequested } from "../redux/SingleProduct/singleProductSlice";
import { Loading } from "../components/LoadingGif/Loading";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.singleProduct.isLoading);

  useEffect(() => {
    dispatch(getSingleProductRequested({ id: Number(id) }));
  }, []);
  return <section>{isLoading ? <Loading /> : <SingleProductHeader />}</section>;
};

export default SingleProductPage;
