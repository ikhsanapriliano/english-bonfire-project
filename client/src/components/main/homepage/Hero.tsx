import Community from "assets/community.png";
import User from "../extra/User";
import Welcome from "../extra/Welcome";

function Hero() {
  return (
    <div>
      <div id="welcome" className={`flex items-center justify-center p-2`}>
        <div className={`lg:w-1200 flex justify-center items-center flex-col `}>
          <section className={`flex items-center justify-center sm:flex-col lg:flex-row mt-20 lg:px-6`}>
            <div className={`lg:w-1/2 flex justify-center items-center flex-col`}>
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
