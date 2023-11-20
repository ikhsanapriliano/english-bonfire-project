import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import personalProfile from "assets/personalProfile.png";
import { appUseSelector } from "src/hooks/hooks";

function Navbar() {
  const { data, isLoggedIn } = appUseSelector((state) => state.personal);
  const [menu, setMenu] = useState(false);

  function onMenu() {
    setMenu(!menu);
  }

  return (
    <nav>
      <div className={`flex items-center justify-center w-screen h-20 p-4 fixed z-30 top-0 bg-white drop-shadow`}>
        <div className={`w-1200 flex items-center justify-between`}>
          {/* {left side} */}
          <div className={`flex items-center gap-8 w-3/4 ps-2`}>
            <HashLink smooth to={`/#welcome`}>
              <h1 className={`text-2xl pl-2 font-medium text-primary-2`}>ENGLISH BONFIRE</h1>
            </HashLink>
            <div className={`flex items-center gap-8`}>
              <HashLink smooth to={`/#welcome`} className={`text-primary-2 font-medium sm:hidden lg:block`}>
                Home
              </HashLink>
              <HashLink smooth to={`/#dashboard`} className={`text-primary-2 font-medium sm:hidden lg:block`}>
                Dashboard
              </HashLink>
              <HashLink smooth to={`/#camp`} className={`text-primary-2 font-medium sm:hidden lg:block`}>
                Camp
              </HashLink>
            </div>
          </div>
          {/* {right side} */}
          <div className={`flex items-center justify-end md:gap-2 sm:gap-0 w-1/4 sm:pe-1 md:pe-4`}>
            <HashLink smooth to={`/#dashboard`} className={`flex items-center justify-center sm:hidden md:flex`}>
              <img className={`w-14 rounded-full`} src={isLoggedIn ? data?.profile : personalProfile} />
            </HashLink>
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
              <HashLink smooth to={`/#welcome`} className={`pb-1 pt-4 border-b border-gray-500`}>
                Home
              </HashLink>
              <HashLink smooth to={`/#dashboard`} className={`pb-1 pt-4 border-b border-gray-500`}>
                Dashboard
              </HashLink>
              <HashLink smooth to={`/#camp`} className={`pb-1 pt-4 border-b border-gray-500`}>
                Camp
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
