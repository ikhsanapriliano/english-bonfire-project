import { HashLink } from "react-router-hash-link";
import PersonalCard from "../extra/PersonalCard";

function Step1() {
  return (
    <div className={`flex flex-col min-h-screen py-10 items-center`}>
      <h2>Step 1</h2>
      <h3>Validate Your Account</h3>
      <PersonalCard />
      <div className={`flex gap-2`}>
        <HashLink smooth to={`/#camp`} className={`py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1`}>
          Back
        </HashLink>
        <HashLink smooth to={`/bivouac/rules/#step`} className={`py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1`}>
          Next
        </HashLink>
      </div>
    </div>
  );
}

export default Step1;
