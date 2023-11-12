import PersonalCard from "../extra/PersonalCard";

function Step1() {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <h2>Step 1</h2>
      <h3>Validate Your Account</h3>
      <PersonalCard />
      <button className={`py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1`}>Next</button>
    </div>
  );
}

export default Step1;
