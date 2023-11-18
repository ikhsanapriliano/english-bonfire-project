import CommunityCard from "../extra/CommunityCard";
import JoinedCard from "../extra/JoinedCard";
import PersonalCard from "../extra/PersonalCard";

function Dashboard() {
  return (
    <section id="dashboard" className={`py-24 px-5 flex justify-center items-center border-t-2 shadow-sm shadow-gray-300`}>
      <div className={`flex lg:flex-row sm:flex-col items-center lg:items-start lg:h-[950px] lg:justify-between lg:w-1200 text-primary-2 gap-3`}>
        <PersonalCard />
        <CommunityCard />
        <JoinedCard />
      </div>
    </section>
  );
}

export default Dashboard;
