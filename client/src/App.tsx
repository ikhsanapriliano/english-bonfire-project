import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/homepage/Home";
import Step1 from "./components/main/bivouac/Step1";
import Step2 from "./components/main/bivouac/Step2";
import Step3 from "./components/main/bivouac/Step3";
import Step4 from "./components/main/bivouac/Step4";
import Step5 from "./components/main/bivouac/Step5";
import Bevouac from "./components/main/bivouac/Bivouac";
import { appUseDispatch, appUseSelector } from "src/hooks/hooks";
import { fetchData } from "src/store/slice/CommunitySlice";
import { fetchPersonal } from "./store/slice/PersonalSlice";
import { useEffect } from "react";
import ErrorPage from "./components/main/error/ErrorPage";
import LoadingPage from "./components/loading/LoadingPage";

function App() {
  const { loading } = appUseSelector((state) => state.community);
  const dispatch = appUseDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchPersonal());
  }, [dispatch]);

  return (
    <div className="app">
      {loading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bivouac" element={<Bevouac />}>
              <Route index element={<Step1 />} />
              <Route path="rules" element={<Step2 />} />
              <Route path="plan" element={<Step3 />} />
              <Route path="solve" element={<Step4 />} />
              <Route path="finished" element={<Step5 />} />
            </Route>
            <Route path="/unknown" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
