import YoungMan from "assets/young-bearded-man-with-striped-shirt.jpg";

function PersonalCard() {
  return (
    <div className={`lg:w-2/6 h-full sm:mb-4 lg:mb-0 px-3`}>
      <div className={`h-full py-5 bg-white border border-primary-2 rounded-xl flex flex-col justify-center items-center`}>
        <h2 className={`font-medium text-lg mb-4`}>My Profile</h2>
        <div className={`justify-center items-center border-y border-black`}>
          <img className={`relative`} src={YoungMan} />
        </div>
        <p className={`mt-3 mb-1`}>My Full Name</p>
        <p className={`mb-1`}>Current Joined Camp</p>
        <div className={`flex gap-2`}>
          <button className={`bg-primary-2 text-white py-2 px-5 text-sm rounded-md hover:bg-primary-1`}>Linkedin</button>
          <button className={`text-white rounded-md text-sm bg-red-700 py-2 px-5 hover:bg-red-900`}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalCard;
