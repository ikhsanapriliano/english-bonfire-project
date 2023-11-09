import { flexItemsRow } from "shared/style";
import { MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [menu, setMenu] = useState(false);

  function onMenu() {
    setMenu(!menu);
  }

  return (
    <nav>
      <div className={`${flexItemsRow} justify-center w-screen h-20 p-4 fixed z-30 top-0 bg-white drop-shadow`}>
        <div className={`w-1200 ${flexItemsRow} justify-between`}>
          {/* {left side} */}
          <div className={`${flexItemsRow} gap-8 w-3/4 ps-2`}>
            <HashLink smooth to={`/#welcome`}>
              <h1 className={`text-2xl pl-2 font-medium text-primary-2`}>ENGLISH BONFIRE</h1>
            </HashLink>

            <div className={`${flexItemsRow} gap-8`}>
              <p className={`text-primary-2 font-medium sm:hidden lg:block`}>ADMIN PROFILE</p>

              <HashLink smooth to={`/#camp`} className={`text-primary-2 font-medium sm:hidden lg:block`}>
                CAMP
              </HashLink>
            </div>
          </div>
          {/* {right side} */}
          <div className={`${flexItemsRow} justify-end md:gap-2 sm:gap-0 w-1/4 sm:pe-1 md:pe-4`}>
            <HashLink smooth to={`/dashboard`} className={`text-primary-2 font-medium sm:hidden lg:block`}>
              DASHBOARD
            </HashLink>
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
                ? `fixed top-16 left-0 right-0 bg-white
          px-10 pb-14 pt-3`
                : `hidden`
            }
          >
            <div className={`flex flex-col justify-center gap-3 text-primary-2 font-medium text-xl`}>
              <HashLink smooth to={`/dashboard`} className={`pb-1 pt-4 border-b border-gray-500`}>
                DASHBOARD
              </HashLink>
              <p className={`pb-1 pt-4 border-b border-gray-500`}>ADMIN PROFILE</p>

              <HashLink smooth to={`/#camp`} className={`pb-1 pt-4 border-b border-gray-500`}>
                CAMP
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
