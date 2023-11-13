import { changing } from "src/store/slice/slice";
import { appUseDispatch } from "hooks/hooks";

function GetStarted() {
  const dispatch = appUseDispatch();

  return (
    <div>
      <button onClick={() => dispatch(changing())} className={`bg-primary-2 sm:text-sm p-3 text-white rounded-md hover:bg-primary-1 mt-4`}>
        GET STARTED
      </button>
    </div>
  );
}

export default GetStarted;
