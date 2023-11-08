import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/main/homepage/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
