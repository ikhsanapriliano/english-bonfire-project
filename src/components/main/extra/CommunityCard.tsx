import YoungMan from "assets/young-bearded-man-with-striped-shirt.jpg";

function CommunityCard() {
  return (
    <div className={`lg:w-52 lg:h-72 lg:p-5 flex flex-col items-center mb-3 lg:rounded-lg bg-primary-2`}>
      <div className={`lg:h-52 overflow-hidden justify-center items-center border border-white`}>
        <img className={`lg:relative lg:scale-[175%] lg:mt-10`} src={YoungMan} />
      </div>
      <div className={`mt-2 text-white flex flex-col justify-center items-center`}>
        <p>First Name</p>
        <button className={`bg-primary-3 py-1 px-2 text-xs rounded-sm hover:bg-primary-1`}>Linkedin</button>
      </div>
    </div>
  );
}

export default CommunityCard;
