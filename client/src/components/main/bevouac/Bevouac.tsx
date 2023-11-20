import { Outlet } from "react-router-dom";
import Loading from "assets/Loading.gif";

function Bevouac() {
  return (
    <>
      <div id="step" className={`pt-32 flex justify-center items-center`}>
        <img src={Loading} />
      </div>
      <Outlet />
    </>
  );
}

export default Bevouac;
