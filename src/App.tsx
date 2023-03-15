import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { SingleCategoryPage } from "./pages/SingleCategoryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:category" element={<SingleCategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
