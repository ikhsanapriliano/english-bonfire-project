import { flexItemsCol, flexItemsRow } from "shared/style";
import Instagram from "assets/ig-logo.png";

function Hero() {
  return (
    <section className={`${flexItemsCol} items-center flex-col py-52  h-screen bg-primary-4`}>
      <h1 className={`text-center text-5xl font-bold leading-normal`}>Community To Speak English For 10 Minutes</h1>
      <p className={`text-xl font-medium`}>no matter what level you are, as long as you have a gasoline to learn</p>
      <div className={`${flexItemsRow} justify-center gap-2 mt-10 `}>
        <button className={`bg-primary-2 p-5 text-primary-4 rounded-md`}>JUST LIGHT THE BONFIRE NOW</button>
        <img className={`w-16 rounded-2xl`} src={Instagram} />
      </div>
    </section>
  );
}

export default Hero;
