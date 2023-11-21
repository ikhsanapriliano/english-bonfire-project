import UsersProfile from "../extra/UsersProfile";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { appUseSelector } from "src/hooks/hooks";

function CommunityCard() {
  const [isHidden, setHidden] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [find, setFind] = useState<string[]>([]);
  const [searching, setSearching] = useState<boolean>(false);

  const { data } = appUseSelector((state) => state.community);

  function userRender() {
    if (data.length > 0) {
      return data.map((user, index) => <UsersProfile key={index} profile={user.profile} fName={user.firstName} camp={user.camp} />);
    }
    return null;
  }

  function userFound() {
    if (data.length > 0) {
      if (find.length > 0) {
        return find.map((user, index) => {
          const foundUser = data.find((item) => item.sub === user);
          if (foundUser) {
            return <UsersProfile key={index} profile={foundUser.profile} fName={foundUser.firstName} camp={foundUser.camp} />;
          }
          return null;
        });
      }
    }
    return null;
  }

  function findHandle() {
    data.forEach((item) => {
      const wordRegex = new RegExp(search, "i");
      const result = wordRegex.test(item.firstName);
      const newValue = [];
      if (result == true) {
        newValue.push(item.sub);
      }
      setFind(newValue);
    });
    setSearching(true);
  }

  function finalOutput() {
    if (searching === false) {
      return userRender();
    } else {
      return userFound();
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
        <div className={`${isHidden ? `hidden lg:flex` : `flex`} justify-center items-end gap-1`}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className={`px-2 w-40 text-center border-b border-primary-1`}
            type="text"
            placeholder="Find Someone"
          />
          <button onClick={findHandle} className={` bg-primary-1 text-white px-2 rounded-sm hover:bg-primary-2`}>
            Search
          </button>
        </div>
      </div>
      <div className={isHidden ? `hidden lg:w-full lg:inline-block lg:h-[810px] overflow-y-scroll border` : `h-[450px] inline-block lg:h-[810px] overflow-y-scroll border w-full`}>
        <div className={`lg:grid lg:grid-cols-3 grid-cols-1`}>{finalOutput()}</div>
      </div>
    </div>
  );
}

export default CommunityCard;
