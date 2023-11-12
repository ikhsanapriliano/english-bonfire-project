import CommunityCard from "../extra/CommunityCard";
import PersonalCard from "../extra/PersonalCard";

function Dashboard() {
  return (
    <section className={`bg-primary-4 lg:pb-16 pt-24 lg:h-screen flex justify-center items-center`}>
      <div className={`flex lg:flex-row sm:flex-col justify-center h-full items-center w-1200 text-primary-2`}>
        <PersonalCard />
        <div className={`lg:w-4/6  lg:h-full bg-white lg:border sm:border-y border-primary-2 lg:rounded-xl lg:p-5 lg:mr-3`}>
          <h2 className={`text-center font-medium text-lg lg:mb-5 sm:my-5`}>Community</h2>
          <div className={`border border-primary-2 sm:h-96 lg:h-5/6 grid grid-cols-3 overflow-y-scroll lg:p-10 lg:gap-6`}>
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
