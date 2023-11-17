import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Instagram from "assets/instagram.png";
import Linkedin from "assets/Linkedin.png";
import Discord from "assets/Discord.png";
import { Link } from "react-router-dom";

function PersonalCard() {
  const [data, setData] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/user");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  if (data === null) {
    console.log(data);
    return <Navigate to={`/`} />;
  }

  return (
    <div className={` sm:mb-4 lg:mb-0 `}>
      <div className={`border shadow-sm shadow-gray-300 rounded-lg flex flex-col justify-center items-center`}>
        <div className="p-5 flex flex-col justify-center items-center border-b border-gray-300 ">
          <p className={`font-medium text-lg`}>My Profile</p>
          <div className={`rounded-full overflow-hidden my-7`}>
            <img src={data === "" ? "loading" : data.profile} alt="something wrong with your profile" />
          </div>
          <p className={`text-center`}>{data === "" ? "loading" : `${data.firstName} ${data.lastName}`}</p>
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
          <button className={`text-white rounded-sm text-sm bg-red-700 py-1 px-5 hover:bg-red-900`}>Logout</button>
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
