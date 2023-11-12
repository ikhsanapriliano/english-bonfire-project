function Step3() {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <h2>Step 3</h2>
      <h3>Your Plan</h3>
      <div className={`flex flex-col justify-center items-center font-medium h-96 mb-3 lg:mb-0 gap-5 mt-3 p-10 border border-primary-2 rounded-md`}>
        <p>Season 1</p>
        <p>Episode 1 : Introduce Yourself</p>
        <p>Bevouac 1 Monday 8 PM</p>
        <p className={`border border-primary-2 rounded-md py-1 px-5`}>S1E1B1</p>
      </div>
      <button className={`py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1`}>Next</button>
    </div>
  );
}

export default Step3;
