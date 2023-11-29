import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

type About = {
  title: string;
  text: string;
  stat: boolean;
};

function AboutCard(props: About) {
  const [hiding, setHiding] = useState<boolean>(props.stat);

  return (
    <button
      onClick={() => {
        setHiding(!hiding);
      }}
      className={`shadow-sm shadow-gray-300 border p-5 rounded-md flex gap-3`}
    >
      <div>{hiding ? <ChevronUpIcon className={`w-6`} /> : <ChevronDownIcon className={`w-6`} />}</div>
      <div className={`text-left`}>
        <h3 className={`text-lg`}>{props.title}</h3>
        <p className={`pt-5 lg:pe-10 ${hiding ? `hidden` : null}`}>{props.text}</p>
      </div>
    </button>
  );
}

export default AboutCard;
