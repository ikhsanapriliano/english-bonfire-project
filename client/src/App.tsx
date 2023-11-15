import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/homepage/Home";
import Dashboard from "./components/main/dashboard/Dashboard";
import Step1 from "./components/main/bevouac/Step1";
import Step2 from "./components/main/bevouac/Step2";
import Step3 from "./components/main/bevouac/Step3";
import Step4 from "./components/main/bevouac/Step4";
import Step5 from "./components/main/bevouac/Step5";
import Bevouac from "./components/main/bevouac/Bevouac";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bevouac" element={<Bevouac />}>
            <Route index element={<Step1 />} />
            <Route path="rules" element={<Step2 />} />
            <Route path="plan" element={<Step3 />} />
            <Route path="solve" element={<Step4 />} />
            <Route path="finished" element={<Step5 />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
