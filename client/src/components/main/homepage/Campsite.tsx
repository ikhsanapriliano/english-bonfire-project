import CampCard from "../extra/CampCard";
import episode from "src/shared/episode";
import { useState, useEffect } from "react";
import { appUseSelector } from "src/hooks/hooks";

function Campsite() {
  const commune = appUseSelector((state) => state.community.data);
  const [b1, setB1] = useState<object[]>([]);
  const [b2, setB2] = useState<object[]>([]);
  const [b3, setB3] = useState<object[]>([]);

  function setData() {
    if (commune.length > 0) {
      commune.forEach((user) => {
        user.camp.forEach((item) => {
          if (item === `${episode.identity}B1`) {
            setB1((prev) => {
              return [...prev, user];
            });
          } else if (item === `${episode.identity}B2`) {
            setB2((prev) => {
              return [...prev, user];
            });
          } else if (item === `${episode.identity}B3`) {
            setB3((prev) => {
              return [...prev, user];
            });
          }
        });
      });
    }
  }

  useEffect(() => {
    setData();
  }, [commune]);

  return (
    <section id={`camp`} className={`bg-primary-4`}>
      <div className={`flex items-center justify-center p-24`}>
        <div className={`w-1200 flex justify-center items-center flex-col `}>
          <h3 className={`text-xl font-medium`}>Current Camp</h3>
          <p className={`font-medium`}>{`Episode ${episode.number} : ${episode.title}`}</p>
          <div className={`flex justify-center flex-col lg:items-center lg:flex-row gap-10`}>
            <CampCard id={`${episode.identity}B1`} bivouac="Bivouac 1" day="Monday 8 PM" cap={b1.length} />
            <CampCard id={`${episode.identity}B2`} bivouac="Bivouac 2" day="Wednesday 8 PM" cap={b2.length} />
            <CampCard id={`${episode.identity}B3`} bivouac="Bivouac 3" day="Friday 8 PM" cap={b3.length} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campsite;
