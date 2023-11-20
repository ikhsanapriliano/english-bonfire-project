import { appUseSelector } from "src/hooks/hooks";
import episode from "src/shared/episode";
import { useEffect, useState } from "react";

function JoinedCard() {
  const { data } = appUseSelector((state) => state.community);
  const [b1, setB1] = useState<string[]>([]);
  const [b2, setB2] = useState<string[]>([]);
  const [b3, setB3] = useState<string[]>([]);

  function setData() {
    if (data.length > 0) {
      data.forEach((user) => {
        user.camp.forEach((item) => {
          if (item === `${episode.identity}B1`) {
            const name = `${user.firstName} ${user.lastName}`;
            setB1((prev) => {
              return [...prev, name.substring(0, 20)];
            });
          } else if (item === `${episode.identity}B2`) {
            const name = `${user.firstName} ${user.lastName}`;
            setB2((prev) => {
              return [...prev, name.substring(0, 20)];
            });
          } else if (item === `${episode.identity}B3`) {
            const name = `${user.firstName} ${user.lastName}`;
            setB3((prev) => {
              return [...prev, name.substring(0, 20)];
            });
          }
        });
      });
    }
  }

  useEffect(() => {
    setData();
  }, [data]);

  return (
    <div className={`flex flex-col h-full items-center justify-between gap-5`}>
      <div className={`flex flex-col w-60 justify-center rounded-md border shadow shadow-gray-300`}>
        <p className={`text-center border-b border-gray-300 py-3`}>Bevouac 1</p>
        <ul className={`flex flex-col text gap-3 px-2 py-5`}>
          <li className={`border-b border-gray-300`}>{b1[0] !== undefined ? `1.${b1[0]}` : `1.-`}</li>
          <li className={`border-b border-gray-300`}>{b1[1] !== undefined ? `2.${b1[1]}` : `2.-`}</li>
          <li className={`border-b border-gray-300`}>{b1[2] !== undefined ? `3.${b1[2]}` : `3.-`}</li>
          <li className={`border-b border-gray-300`}>{b1[3] !== undefined ? `4.${b1[3]}` : `4.-`}</li>
          <li className={`border-b border-gray-300`}>{b1[4] !== undefined ? `5.${b1[4]}` : `5.-`}</li>
        </ul>
      </div>
      <div className={`flex flex-col w-60 justify-center rounded-md border shadow shadow-gray-300`}>
        <p className={`text-center border-b border-gray-300 py-3`}>Bevouac 2</p>
        <ul className={`flex flex-col text gap-5 px-2 py-5`}>
          <ul className={`flex flex-col text gap-3 px-2 py-5`}>
            <li className={`border-b border-gray-300`}>{b2[0] !== undefined ? `1.${b2[0]}` : `1.-`}</li>
            <li className={`border-b border-gray-300`}>{b2[1] !== undefined ? `2.${b2[1]}` : `2.-`}</li>
            <li className={`border-b border-gray-300`}>{b2[2] !== undefined ? `3.${b2[2]}` : `3.-`}</li>
            <li className={`border-b border-gray-300`}>{b2[3] !== undefined ? `4.${b2[3]}` : `4.-`}</li>
            <li className={`border-b border-gray-300`}>{b2[4] !== undefined ? `5.${b2[4]}` : `5.-`}</li>
          </ul>
        </ul>
      </div>
      <div className={`flex flex-col w-60 justify-center rounded-md border shadow shadow-gray-300`}>
        <p className={`text-center border-b border-gray-300 py-3`}>Bevouac 3</p>
        <ul className={`flex flex-col text gap-5 px-2 py-5`}>
          <ul className={`flex flex-col text gap-3 px-2 py-5`}>
            <li className={`border-b border-gray-300`}>{b3[0] !== undefined ? `1.${b3[0]}` : `1.-`}</li>
            <li className={`border-b border-gray-300`}>{b3[1] !== undefined ? `2.${b3[1]}` : `2.-`}</li>
            <li className={`border-b border-gray-300`}>{b3[2] !== undefined ? `3.${b3[2]}` : `3.-`}</li>
            <li className={`border-b border-gray-300`}>{b3[3] !== undefined ? `4.${b3[3]}` : `4.-`}</li>
            <li className={`border-b border-gray-300`}>{b3[4] !== undefined ? `5.${b3[4]}` : `5.-`}</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default JoinedCard;
