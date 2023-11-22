import { ChangeEvent, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import math from "src/shared/math";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { appUseSelector } from "src/hooks/hooks";
import { Navigate } from "react-router-dom";

function Step4() {
  const { id } = appUseSelector((state) => state.camp);
  const [question, setQuestion] = useState<number>(0);
  const [isTrue, setTrue] = useState<null | boolean>(null);
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 15);
    setQuestion(random);
  }, []);

  function fillAnswer(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setAnswer(newValue);
  }

  function checkAnswer() {
    const newAnswer = parseInt(answer);
    if (newAnswer === math[question].answer) {
      setTrue(true);
    } else {
      setTrue(false);
    }
  }

  function boxDecoration() {
    if (isTrue === true) {
      return `border-4 border-primary-1`;
    } else if (isTrue === false) {
      return `border-4 border-red-700`;
    }
  }

  function setColor() {
    if (isTrue) {
      return `bg-primary-1 text-white`;
    } else if (isTrue === false) {
      return `bg-red-700 text-white`;
    } else if (isTrue === null) {
      return `bg-white text-black`;
    }
  }

  if (id === "") {
    return <Navigate to={`/unknown`} />;
  } else {
    return (
      <form method="post" action={"https://english-bonfire-server.up.railway.app/join"} className={`flex flex-col min-h-screen pt-10 items-center`}>
        <input type="hidden" value={id} name="id" />
        <h2>Step 4</h2>
        <h3>Are You Human?</h3>
        <div className={`flex flex-col justify-center items-center gap-3 my-5 lg:p-10 lg:border lg:shadow-sm shadow-gray-300 rounded-md`}>
          <div className={`flex items-center gap-2 p-2 ${boxDecoration()}`}>
            <label>{math[question].question} =</label>
            <input
              onChange={(e) => {
                fillAnswer(e);
              }}
              className={`border-b border-primary-2 px-1`}
              placeholder="your answer"
            />
            {isTrue !== null ? <div className={`w-5 flex justify-center items-center`}>{isTrue === true ? <CheckIcon /> : <XMarkIcon />}</div> : null}
          </div>
          <div
            onClick={() => {
              checkAnswer();
            }}
            className={`py-1 px-5 border rounded-md hover:bg-primary-1 hover:text-white cursor-pointer ${setColor()}`}
          >
            check
          </div>
        </div>
        <div className={`flex gap-2`}>
          <HashLink smooth to={`/bivouac/plan/#step`} className={`py-1  px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1 my-5 lg:my-0`}>
            Back
          </HashLink>
          <button type="submit" className={`${isTrue !== true ? `hidden` : null} py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1 my-5 lg:my-0`}>
            Join
          </button>
        </div>
      </form>
    );
  }
}

export default Step4;
