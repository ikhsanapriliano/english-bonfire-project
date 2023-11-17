import { useState, useEffect } from "react";

function UsersProfile() {
  const [commune, setCommune] = useState<any>("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/community");
      const result = await response.json();
      setCommune(result);
    }
    fetchData();
  }, []);

  return (
    <div className={`p-5 flex flex-col justify-center items-center border lg:w-52 lg:h-52`}>
      <div className={`rounded-full overflow-hidden justify-center items-center`}>
        <img src={commune === "" ? "loading" : commune.profile} />
      </div>
      <div className={`mt-3 text-primary-2 flex flex-col justify-center items-center text-center`}>
        <p>{commune === "" ? "loading" : `${commune.firstName}`}</p>
        <div className={`flex justify-center items-center gap-1`}>
          <p className={`py-1 px-2 text-xs rounded-md border border-gray-300`}>S1E1B1</p>
          <p className={`py-1 px-2 text-xs rounded-md border border-gray-300`}>S1E1B1</p>
          <p className={`py-1 px-2 text-xs rounded-md border border-gray-300`}>S1E1B1</p>
        </div>
      </div>
    </div>
  );
}

export default UsersProfile;
