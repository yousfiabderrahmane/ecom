import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Products } from "./components/Products/Products";
import { Repair } from "./components/Repair/Repair";
import { Services } from "./components/Services/Services";
import { useAppSelector } from "./redux/hooks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Products />
      <Repair />
    </div>
  );
}

export default App;
