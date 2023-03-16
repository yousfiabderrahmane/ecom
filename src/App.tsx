import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import React from "react";
import { Loading } from "./components/LoadingGif/Loading";
// import { Landing } from "./pages/Landing";
// import { Shop } from "./pages/Shop";
// import { SingleCategoryPage } from "./pages/SingleCategoryPage";

const LazyLanding = React.lazy(() => import("./pages/Landing"));
const LazyShop = React.lazy(() => import("./pages/Shop"));
const LazySingleCategoryPage = React.lazy(
  () => import("./pages/SingleCategoryPage")
);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LazyLanding />}></Route>
            <Route path="/shop" element={<LazyShop />} />
            <Route
              path="/products/:category"
              element={<LazySingleCategoryPage />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
