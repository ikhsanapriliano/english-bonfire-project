import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function Bevouac() {
  return (
    <div className={`mt-20 flex justify-center`}>
      <section className={`w-1200 min-h-screen pt-8 flex flex-col items-center`}>
        <div className={`flex gap-2 mb-4`}>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
        </div>
        <div>
          <Step4 />
        </div>
      </section>
    </div>
  );
}

export default Bevouac;
