import Instagram from "assets/instagram.png";
import Linkedin from "assets/Linkedin.png";
import Discord from "assets/Discord.png";
import { Link } from "react-router-dom";
import { appUseSelector, appUseDispatch } from "src/hooks/hooks";
import personalProfile from "assets/personalProfile.png";
import LinkedinBlue from "assets/Sign-in-Large---Active.png";
import { logOut } from "src/store/slice/PersonalSlice";

function PersonalCard() {
  const dispatch = appUseDispatch();
  const { data, isLoggedIn, camp } = appUseSelector((state) => state.personal);

  return (
    <div className={` sm:mb-4 lg:mb-0 `}>
      <div className={`border shadow-sm shadow-gray-300 rounded-lg flex flex-col justify-center items-center`}>
        <div className="p-5 flex flex-col justify-center items-center border-b border-gray-300 ">
          <p className={`font-medium text-lg`}>My Profile</p>
          <div className={`rounded-full overflow-hidden my-7`}>
            <img src={isLoggedIn ? data?.profile : personalProfile} alt="something wrong with your device" />
          </div>
          <p className={`text-center`}>{isLoggedIn ? `${data?.firstName} ${data?.lastName}` : `You Are Not Signed In`}</p>
        </div>
        <div className={`flex flex-col justify-center items-center w-full p-5 gap-2 border-b border-gray-300`}>
          <p className={`text-center`}>Current Joined Camp</p>
          <div className={`flex justify-center items-center gap-1`}>
            <p className={`py-1 px-3 text-xs rounded-md border border-gray-300`}>S1E1B1</p>
            <p className={`py-1 px-3 text-xs rounded-md border border-gray-300`}>S1E1B1</p>
            <p className={`py-1 px-3 text-xs rounded-md border border-gray-300`}>S1E1B1</p>
          </div>
        </div>
        <div className={`py-5`}>
          {isLoggedIn ? (
            <button
              onClick={() => {
                dispatch(logOut());
              }}
              className={`text-white rounded-sm text-sm bg-red-700 py-1 px-5 hover:bg-red-900`}
            >
              Logout
            </button>
          ) : (
            <Link to={`http://localhost:3000/auth/linkedin`}>
              <img className={`h-8`} src={LinkedinBlue} />
            </Link>
          )}
        </div>
      </div>
      <div className={`flex flex-col justify-center items-center mt-4 rounded lg border shadow-sm shadow-gray-300`}>
        <p className={`text-lg font-medium w-full text-center border-b border-gray-300`}>Follow Us</p>
        <div className={`flex justify-center py-4 items-center gap-2`}>
          <Link to={`https://www.youtube.com`}>
            <img className={`rounded-full w-8`} src={Instagram} />
          </Link>
          <Link to={`https://www.youtube.com`}>
            <img className={`rounded-full w-8`} src={Discord} />
          </Link>
          <Link to={`https://www.youtube.com`}>
            <img className={`rounded-full w-8`} src={Linkedin} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PersonalCard;
