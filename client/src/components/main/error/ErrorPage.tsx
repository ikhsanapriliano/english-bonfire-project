import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className={`flex justify-center items-center min-h-screen`}>
      <div className="flex flex-col justify-center items-center w-1200 gap-2">
        <p>Error</p>
        <p>{`:(`}</p>
        <Link className="py-1 px-4 hover:bg-gray-200 border border-black" to={`/`}>
          Try Again
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
