import UsersProfile from "../extra/UsersProfile";

function CommunityCard() {
  return (
    <div className={`border h-full shadow-sm shadow-gray-300 rounded-md p-5`}>
      <div className={`border shadow-md shadow-primary-1 rounded-ss-xl rounded-se-xl py-5 relative z-20`}>
        <h2 className={`text-center font-medium text-lg`}>Community</h2>
      </div>
      <div className={`lg:h-[800px] grid grid-cols-3 overflow-y-scroll border scrollbar-thumb-gray-400 scrollbar-track-gray-200`}>
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
        <UsersProfile />
      </div>
    </div>
  );
}

export default CommunityCard;
