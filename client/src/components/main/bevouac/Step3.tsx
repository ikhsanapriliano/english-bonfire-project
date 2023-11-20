import { HashLink } from "react-router-hash-link";
import episode from "src/shared/episode";
import { appUseSelector } from "src/hooks/hooks";
import { Navigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

function Step3() {
  const { id, bivouac, day } = appUseSelector((state) => state.camp);

  if (id === "") {
    return <Navigate to={`/error`} />;
  } else {
    return (
      <div className={`flex flex-col pt-10 min-h-screen items-center`}>
        <h2>Step 3</h2>
        <h3>Your Plan</h3>
        <div className={`flex flex-col justify-center items-center font-medium h-96 mb-3 lg:mb-0 gap-3 mt-3 p-10 border shadow-sm shadow-gray-300 rounded-md`}>
          <div className={`w-28`}>
            <ShoppingCartIcon />
          </div>
          <p>{`Episode ${episode.number} : ${episode.title}`}</p>
          <p>{`${bivouac} ${day}`}</p>
          <p className={`border border-primary-2 rounded-sm py-1 px-7`}>{id}</p>
        </div>
        <div className={`flex gap-2`}>
          <HashLink smooth to={`/bivouac/rules/#step`} className={`py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1`}>
            Back
          </HashLink>
          <HashLink smooth to={`/bivouac/solve/#step`} className={`py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1`}>
            Next
          </HashLink>
        </div>
      </div>
    );
  }
}

export default Step3;
