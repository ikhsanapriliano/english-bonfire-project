import { changing } from "src/store/slice/slice";
import { appUseDispatch, appUseSelector } from "hooks/hooks";
import { HashLink } from "react-router-hash-link";

function GetStarted() {
  const { isLoggedIn } = appUseSelector((state) => state.personal);
  const dispatch = appUseDispatch();

  return (
    <div className={`mt-5`}>
      {isLoggedIn ? (
        <HashLink smooth to={isLoggedIn ? "/#dashboard" : "/"}>
          <div className={`bg-primary-2 sm:text-sm p-3 text-white rounded-md hover:bg-primary-1`}>GET STARTED</div>
        </HashLink>
      ) : (
        <button onClick={() => dispatch(changing())} className={`bg-primary-2 sm:text-sm p-3 text-white rounded-md hover:bg-primary-1`}>
          GET STARTED
        </button>
      )}
    </div>
  );
}

export default GetStarted;
