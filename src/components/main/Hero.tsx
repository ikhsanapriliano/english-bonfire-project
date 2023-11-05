import { flexItemsCol } from "shared/style";

function Hero() {
  return (
    <section className={`${flexItemsCol} items-center flex-col p-32 gap-5 mt-20 h-85vh bg-primary-4`}>
      <h1 className={`text-center text-5xl font-bold leading-normal`}>
        Community To Speak English For 10 Minutes
        <br />
        Without Judgement
      </h1>
      <p className={`text-lg`}>no matter what level you are, as long as you have a gasoline to learn</p>
      <button className={`bg-primary-1 p-3 mt-6 text-white rounded-lg`}>JUST LIGHT THE BONFIRE NOW</button>
    </section>
  );
}

export default Hero;
