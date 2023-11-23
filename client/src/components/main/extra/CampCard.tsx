import CardProfile from "./CardProfile";
import { HashLink } from "react-router-hash-link";
import { appUseDispatch, appUseSelector } from "src/hooks/hooks";
import { addCamp } from "src/store/slice/CampSlice";
import { useState, useEffect } from "react";

interface camp {
  id: string;
  bivouac: string;
  day: string;
  cap: number;
}

function CampCard(props: camp) {
  const { isLoggedIn, data } = appUseSelector((state) => state.personal);
  const dispatch = appUseDispatch();
  const [registered, setRegistered] = useState<string>(`/bivouac/#step`);

  async function updateCamp() {
    dispatch(
      addCamp({
        id: props.id,
        bivouac: props.bivouac,
        day: props.day,
      })
    );
    // await fetch('http://localhost:3000/api/sendData', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ data: dataToSend }),
    // });
  }

  useEffect(() => {
    setDirection();
    data?.camp.map((item) => {
      if (item === props.id) {
        setRegistered(`/#dashboard`);
      }
    });
  }, [data]);

  function setDirection() {
    if (isLoggedIn && props.cap < 5) {
      setRegistered(`/bivouac/#step`);
    } else if (isLoggedIn && props.cap === 5) {
      setRegistered(`/#dashboard`);
    } else if (isLoggedIn === false) {
      setRegistered(`/#dashboard`);
    }
  }

  return (
    <div className={`flex justify-center items-center flex-col bg-white p-7 rounded-2xl mt-7 w-72 border border-black`}>
      <h4 className={`text-center`}>{props.bivouac}</h4>
      <div className={`flex justify-center items-center flex-col gap-1 p-10 border border-primary-2 my-2`}>
        <CardProfile />
        <div className={`flex items-center gap-1`}>
          <CardProfile />
          <CardProfile />
        </div>
        <div className={`flex items-center gap-1`}>
          <CardProfile />
          <CardProfile />
        </div>
      </div>
      <p>{props.day}</p>
      <HashLink
        onClick={() => {
          updateCamp();
        }}
        smooth
        to={registered}
        className={`py-1 px-5 rounded-sm mt-2 bg-primary-2 hover:bg-primary-1 text-white`}
      >
        {props.cap === 5 ? `Full` : `Join`}
      </HashLink>
    </div>
  );
}

export default CampCard;
