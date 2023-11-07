import { flexItemsCol, flexItemsRow } from "shared/style";
import Community from "assets/community.png";
import User from "./extra/User";

function Hero() {
  return (
    <div>
      <div className={`${flexItemsRow} justify-center p-2`}>
        <div className={`w-1200 ${flexItemsCol} items-center flex-col `}>
          <section className={`${flexItemsRow} justify-center sm:flex-col lg:flex-row pt-20 px-6`}>
            <div className={`lg:w-1/2 ${flexItemsCol} items-center flex-col`}>
              <h1 className={`text-center sm:text-2xl md:text-5xl font-bold leading-normal mt-10`}>Community To Speak English For 10 Minutes</h1>
              <p className={`md:text-xl text-center font-medium`}>no matter what level you are as long as you have a tongue to speak</p>
              <button className={`bg-primary-2 sm:text-sm p-3 text-white rounded-md mt-5`}>GET STARTED</button>
            </div>
            <div className={`lg:w-1/2 p-5`}>
              <img className={`w-96 mx-auto`} src={Community} />
              <User />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
