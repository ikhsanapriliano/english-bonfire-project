import { Outlet } from "react-router-dom";

function Bevouac() {
  return (
    <>
      <div id="step" className={`pt-32 flex justify-center items-center`}>
        <div className={`flex gap-2`}>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
          <button className={`w-5 h-5 bg-primary-2 rounded-full`}></button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Bevouac;
