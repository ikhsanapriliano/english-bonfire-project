function Step2() {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <h2>Step 2</h2>
      <h3>Type The Text Below</h3>
      <div className={`flex flex-col mt-2 p-2`}>
        <label className={`mt-4`}>the meeting will be held on discord 3 times a week</label>
        <textarea required className={`border border-primary-2 px-1`} />
        <label className={`mt-4`}>i will follow english bonfire instagram and join discord on the last step</label>
        <textarea required className={`border border-primary-2 px-1`} />
        <label className={`mt-4`}>i will prepare materials with any platform for the meeting based on episode</label>
        <textarea required className={`border border-primary-2 px-1`} />
        <label className={`mt-4`}>I can still attend the meeting even if not registered at the bivouac as a spectator</label>
        <textarea required className={`border border-primary-2 px-1`} />
      </div>
      <button className={`py-1 px-5 bg-primary-2 text-white rounded-sm lg:mt-3 hover:bg-primary-1`}>Next</button>
    </div>
  );
}

export default Step2;
