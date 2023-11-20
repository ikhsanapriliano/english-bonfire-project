import UsersProfile from "../extra/UsersProfile";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { appUseSelector } from "src/hooks/hooks";

function CommunityCard() {
  const [isHidden, setHidden] = useState<boolean>(true);

  const { data } = appUseSelector((state) => state.community);

  function userRender() {
    if (data.length > 0) {
      const users = data.map((user, index) => <UsersProfile key={index} profile={user.profile} fName={user.firstName} camp={user.camp} />);
      return users;
    }
  }

  return (
    <div className={`border h-full sm:w-[300px] sme:w-[340px] lg:w-full shadow-sm shadow-gray-300 rounded-md p-2 lg:p-5 mb-5 lg:mb-0`}>
      <div className={`flex pb-5 flex-col justify-center items-center border shadow-md shadow-primary-1 rounded-ss-xl rounded-se-xl relative z-20 gap-1`}>
        <button
          onClick={() => {
            setHidden(!isHidden);
          }}
          className={`w-full h-full lg:cursor-default pt-5`}
        >
          <div className={`text-center font-medium text-lg flex justify-center items-center gap-1`}>
            <div className={`w-5 flex justify-center items-center lg:hidden`}>{isHidden ? <ChevronDownIcon /> : <ChevronUpIcon />}</div>
            Community
          </div>
        </button>
        <input className={isHidden ? `hidden lg:inline-block text-center border-b border-primary-1` : `text-center border-b border-primary-1`} type="text" placeholder="Search" />
      </div>
      <div className={isHidden ? `hidden lg:w-full lg:inline-block lg:h-[810px] overflow-y-scroll border` : `h-[450px] inline-block lg:h-[810px] overflow-y-scroll border w-full`}>
        <div className={`lg:grid lg:grid-cols-3 grid-cols-1`}>{userRender()}</div>
      </div>
    </div>
  );
}

export default CommunityCard;
