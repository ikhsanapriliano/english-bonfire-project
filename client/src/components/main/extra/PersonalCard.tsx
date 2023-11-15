import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function PersonalCard() {
  const [data, setData] = useState<any>("");
  const [isTrue, setTrue] = useState<boolean>(false);

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
    <div className={`lg:w-2/6 h-full sm:mb-4 lg:mb-0 px-3`}>
      <div className={`h-full py-5 bg-white border border-primary-2 rounded-xl flex flex-col justify-center items-center`}>
        <p className={`font-medium text-lg mb-4`}>My Profile</p>
        <div className={`justify-center items-center rounded-full overflow-hidden`}>
          <img src={data === "" ? "loading" : data.profile} alt="something wrong with your profile" />
        </div>
        <p className={`mt-3 mb-1`}>{data === "" ? "loading" : `${data.firstName} ${data.lastName}`}</p>
        <p className={`mb-1`}>Current Joined Camp</p>
        <div className={`flex gap-2`}>
          <button className={`text-white rounded-md text-sm bg-red-700 py-2 px-5 hover:bg-red-900`}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalCard;
