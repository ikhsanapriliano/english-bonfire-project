import logo from "src/assets/logo.png";
import { flexItemsRow } from "shared/style";

function Navbar() {
  return (
    <nav>
      <div className={`${flexItemsRow} justify-between w-full h-20 p-4 fixed z-30 top-0 bg-white`}>
        {/* {left side} */}
        <div className={`${flexItemsRow} gap-8 w-3/4 ps-4`}>
          <img src={logo} className={`h-16`} />
          <div className={`${flexItemsRow} gap-8`}>
            <p className={`text-primary-1`}>ABOUT US</p>
            <p className={`text-primary-1`}>CAMPSITE</p>
          </div>
        </div>
        {/* {right side} */}
        <div className={`${flexItemsRow} justify-end gap-6 w-1/4 pe-6`}>
          <p className={`text-primary-1`}>DASHBOARD</p>
          <div className={`${flexItemsRow} justify-center h-12 w-12 bg-primary-1 rounded-xl`}>
            <p className={`text-2xl text-white`}>A</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
