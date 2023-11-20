import Login from "./Login";
import GetStarted from "./GetStarted";
import { appUseSelector } from "hooks/hooks";

function Welcome() {
  const isTrue = appUseSelector((state) => state.starter.value);

  return (
    <div className={`flex justify-start flex-col items-center px-5 lg:px-0`}>
      <h1 className={`text-center sm:text-2xl md:text-5xl font-bold leading-normal mt-10`}>Community To Speak English For 10 Minutes</h1>
      <p className={`md:text-xl text-center font-medium`}>no matter what level you are as long as you have a tongue to speak</p>
      {isTrue ? <GetStarted /> : <Login />}
    </div>
  );
}

export default Welcome;
