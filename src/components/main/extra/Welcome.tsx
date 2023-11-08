import { flexItemsCol } from "src/shared/style";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import GetStarted from "./GetStarted";

function Welcome() {
  return (
    <div className={`${flexItemsCol} flex-col items-center`}>
      <h1 className={`text-center sm:text-2xl md:text-5xl font-bold leading-normal mt-10`}>Community To Speak English For 10 Minutes</h1>
      <p className={`md:text-xl text-center font-medium`}>no matter what level you are as long as you have a tongue to speak</p>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Welcome;
