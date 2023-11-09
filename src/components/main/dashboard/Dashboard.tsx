import CommunityCard from "../extra/CommunityCard";
import YoungMan from "assets/young-bearded-man-with-striped-shirt.jpg";

function Dashboard() {
  return (
    <section className={`bg-primary-4 lg:pb-16 pt-24 lg:h-screen flex justify-center items-center`}>
      <div className={`flex lg:flex-row sm:flex-col justify-center h-full items-center w-1200 text-primary-2`}>
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
        <div className={`lg:w-4/6  lg:h-full bg-white lg:border sm:border-y border-primary-2 lg:rounded-xl lg:p-5 lg:mr-3`}>
          <h2 className={`text-center font-medium text-lg lg:mb-5 sm:my-5`}>Community</h2>
          <div className={`border border-primary-2 sm:h-96 lg:h-5/6 grid grid-cols-3 overflow-y-scroll lg:p-10 lg:gap-6 bg-primary-5`}>
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
