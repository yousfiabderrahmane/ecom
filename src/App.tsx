import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import React from "react";
import { Loading } from "./components/LoadingGif/Loading";
import { Footer } from "./components/Footer/Footer";
import { useAppSelector } from "./redux/hooks";

const LazySingleProductPage = React.lazy(
  () => import("./pages/SingleProductPage")
);
const LazyLanding = React.lazy(() => import("./pages/Landing"));
const LazyShop = React.lazy(() => import("./pages/Shop"));
const LazyWish = React.lazy(() => import("./pages/Wish"));
const LazySingleCategoryPage = React.lazy(
  () => import("./pages/SingleCategoryPage")
);

function App() {
  const singleProductLoading = useAppSelector(
    (state) => state.singleProduct.isLoading
  );

  const items = useAppSelector((state) => state.singleProduct.cart.totalItems);
  const price = useAppSelector((state) => state.singleProduct.cart.totalPrice);

  console.log(`Totalitems : ${items} , price : ${price}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LazyLanding />}></Route>
            <Route path="/shop" element={<LazyShop />} />
            <Route
              path="/products/:category"
              element={<LazySingleCategoryPage />}
            />
            <Route path="/wishlist" element={<LazyWish />} />
            <Route path="/product/:id" element={<LazySingleProductPage />} />
          </Routes>
          {!singleProductLoading && <Footer />}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
