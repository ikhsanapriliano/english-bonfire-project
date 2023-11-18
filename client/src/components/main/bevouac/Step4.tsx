import { ChangeEvent, useState } from "react";
import { HashLink } from "react-router-hash-link";
import math from "src/shared/math";

function Step4() {
  const [correct, setCorrect] = useState<number>(0);

  function correctCheck(event: ChangeEvent<HTMLInputElement>, answer: number) {
    const newValue = event.target.value;
    const newAnswer = answer.toString();
    if (newValue == newAnswer && correct < 5) {
      event.target.className = `border-4 border-primary-1 px-1`;
      setCorrect((prev) => prev + 1);
      console.log(correct);
    } else if (newValue != newAnswer && correct > 0) {
      event.target.className = `border-b border-primary-2 px-1`;
      setCorrect((prev) => prev - 1);
      console.log(correct);
    }
  }

  function generateMath() {
    const count = 5;
    const numbers = [];
    for (let x = 0; x < count; x++) {
      const random = Math.floor(Math.random() * 100);
      numbers.push(random);
    }
    if (numbers.length === 5) {
      const mathQuestion = numbers.map((item, index) => {
        return (
          <div className={`flex justify-end items-center gap-2`} key={index}>
            <label>{math[item].question}</label>
            <label>=</label>
            <input
              onBlur={(e) => {
                correctCheck(e, math[item].answer);
              }}
              className={`border-b border-primary-2 px-1`}
            />
          </div>
        );
      });
      return mathQuestion;
    }
  }

  return (
    <div className={`flex flex-col min-h-screen pt-10 items-center`}>
      <h2>Step 4</h2>
      <h3>Are You Serious?</h3>
      <div className={`grid grid-cols-1 gap-5 my-5`}>{generateMath()}</div>
      <div className={`flex gap-2`}>
        <HashLink smooth to={`/bevouac/plan/#step`} className={`py-1  px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1 my-5 lg:my-0`}>
          Back
        </HashLink>
        <HashLink smooth to={`/bevouac/finished/#step`} className={`py-1  px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1 my-5 lg:my-0`}>
          Next
        </HashLink>
      </div>
    </div>
  );
}

export default Step4;
