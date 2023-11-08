import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div>
      <Link to={`/login`}>
        <button className={`bg-primary-2 sm:text-sm p-3 text-white rounded-md hover:bg-primary-1 mt-4`}>GET STARTED</button>
      </Link>
    </div>
  );
}

export default GetStarted;
