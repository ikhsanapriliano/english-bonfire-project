import YoungMan from "assets/young-bearded-man-with-striped-shirt.jpg";
import { useState, useEffect } from "react";

function CommunityCard() {
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
    <div className={`lg:p-5 flex flex-col items-center mb-3 mt-5 lg:mt-0`}>
      <div className={`rounded-full overflow-hidden justify-center items-center`}>
        <img className={``} src={commune === "" ? "loading" : commune.profile} />
      </div>
      <div className={`mt-2 text-primary-2 flex flex-col justify-center items-center text-center`}>
        <p>{commune === "" ? "loading" : `${commune.firstName} ${commune.lastName}`}</p>
      </div>
    </div>
  );
}

export default CommunityCard;
