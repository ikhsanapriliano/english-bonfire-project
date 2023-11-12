import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/homepage/Home";
import Dashboard from "./components/main/dashboard/Dashboard";
import Bevouac from "./components/main/bevouac/Bevouac";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bevouac" element={<Bevouac />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
