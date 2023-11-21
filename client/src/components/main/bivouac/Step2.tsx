import { HashLink } from "react-router-hash-link";
import { ChangeEvent, useState, useEffect } from "react";
import { appUseSelector } from "src/hooks/hooks";
import { Navigate } from "react-router-dom";

function Step2() {
  const [value, setValue] = useState<string>("");
  const [isDone, setDone] = useState<null | boolean>(null);
  const { id } = appUseSelector((state) => state.camp);

  function valueHandle(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function doneHandle() {
    if (isDone === null) {
      return `border-4 border-gray-500`;
    } else if (isDone === false) {
      return `border-4 border-red-500`;
    } else {
      return `border-4 border-primary-1`;
    }
  }

  useEffect(() => {
    if (value === "i understand the terms and conditions") {
      setDone(true);
    } else if (value === "") {
      setDone(null);
    } else {
      setDone(false);
    }
  }, [value]);

  if (id === "") {
    return <Navigate to={`/unknown`} />;
  } else {
    return (
      <div className={`flex flex-col items-center min-h-screen py-10`}>
        <h2>Step 2</h2>
        <h3>Terms & Conditions</h3>
        <div className={`flex flex-col p-10 text-justify gap-4 lg:border rounded-xl lg:my-4 lg:shadow-sm shadow-gray-300`}>
          <p>1. The meeting will be held on discord 3 times a week.</p>
          <p>2. I can follow all the bivouacs that exist in a week.</p>
          <p>3. I will follow english bonfire instagram and join discord.</p>
          <p>4. Beginners are advised to create materials first based on theme.</p>
          <p>5. I can freely use screen sharing if necessary.</p>
          <p>6. I can speak freely without even following theme</p>
          <p>7. I can still attend the meeting even if not joined at the bivouac as a spectator.</p>
          <label className={`text-center`}>Type The Text Below</label>
          <input onChange={valueHandle} type="text" placeholder="i understand the terms and conditions" className={`text-sm text-center ${doneHandle()} px-1 py-3`} />
        </div>
        <div className={`flex gap-2`}>
          <HashLink smooth to={`/bivouac/#step`} className={`py-1 px-5 bg-primary-2 text-white rounded-sm hover:bg-primary-1`}>
            Back
          </HashLink>
          {isDone ? (
            <HashLink smooth to={`/bivouac/plan/#step`} className={`py-1 px-5 bg-primary-2 text-white rounded-sm hover:bg-primary-1`}>
              Next
            </HashLink>
          ) : (
            <button className={`${!isDone ? `hidden` : null} py-1 px-5 bg-primary-2 text-white rounded-sm hover:bg-primary-1`}>Next</button>
          )}
        </div>
      </div>
    );
  }
}

export default Step2;
