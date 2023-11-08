import { flexItemsCol, flexItemsRow } from "shared/style";
import Community from "assets/community.png";
import User from "../extra/User";
import Welcome from "../extra/Welcome";

function Hero() {
  return (
    <div>
      <div id="welcome" className={`${flexItemsRow} justify-center p-2`}>
        <div className={`w-1200 ${flexItemsCol} items-center flex-col `}>
          <section className={`${flexItemsRow} justify-center sm:flex-col lg:flex-row pt-20 px-6`}>
            <div className={`lg:w-1/2 ${flexItemsCol} items-center flex-col`}>
              <Welcome />
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
