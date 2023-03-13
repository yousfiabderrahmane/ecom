import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
