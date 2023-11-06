import { flexItemsRow } from "shared/style";
import { MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  function onMenu() {
    setMenu(!menu);
  }

  return (
    <nav>
      <div className={`${flexItemsRow} justify-center w-full h-20 p-4 fixed z-30 top-0 bg-white drop-shadow`}>
        <div className={`w-1200 ${flexItemsRow} justify-between`}>
          {/* {left side} */}
          <div className={`${flexItemsRow} gap-8 w-3/4 ps-2`}>
            <h1 className={`text-2xl pl-2 font-medium text-primary-2`}>ENGLISH BONFIRE</h1>
            <div className={`${flexItemsRow} gap-8`}>
              <p className={`text-primary-2 font-medium sm:hidden lg:block`}>ABOUT US</p>
              <p className={`text-primary-2 font-medium sm:hidden lg:block`}>CAMP</p>
            </div>
          </div>
          {/* {right side} */}
          <div className={`${flexItemsRow} justify-end md:gap-2 sm:gap-0 w-1/4 pe-4`}>
            <p className={`text-primary-2 font-medium sm:hidden lg:block`}>DASHBOARD</p>
            <button className={`p-3 cursor-pointer`}>
              <div className={`w-7`}>
                <MoonIcon />
              </div>
            </button>
            <div className={`${flexItemsRow} justify-center h-12 w-12 bg-primary-2 rounded-md sm:hidden md:flex`}>
              <p className={`text-2xl text-white`}>A</p>
            </div>
            <button onClick={onMenu} className={`lg:hidden p-3 cursor-pointer`}>
              <div className={`w-7 `}>{menu ? <XMarkIcon /> : <Bars3Icon />}</div>
            </button>
          </div>
          {/* {toggle} */}
          <div
            className={
              menu
                ? ` lg:opacity-0 opacity-100 ease-in-out duration-200 fixed top-16 left-0 right-0 bg-white
          px-10 pb-14 pt-3`
                : `opacity-0 fixed top-16 left-0 right-0`
            }
          >
            <div className={`flex flex-col justify-center gap-3 text-primary-2 font-medium text-xl`}>
              <p className={`pb-1 pt-4 border-b border-gray-500`}>DASHBOARD</p>
              <p className={`pb-1 pt-4 border-b border-gray-500`}>ABOUT US</p>
              <p className={`pb-1 pt-4 border-b border-gray-500`}>CAMP</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
