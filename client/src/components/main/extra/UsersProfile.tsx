type users = {
  profile: string;
  fName: string;
  camp: string[];
};

function UsersProfile(props: users) {
  function campRender() {
    if (props.camp !== undefined) {
      if (props.camp.length > 0) {
        const camp = props.camp.map((item, index) => (
          <p key={index} className={`text-xs rounded-sm px-1 border border-gray-300`}>
            {item}
          </p>
        ));
        return camp;
      } else {
        return "-";
      }
    } else {
      return "-";
    }
  }

  return (
    <div className={`p-5 flex lg:flex-col justify-start lg:justify-center items-center border lg:max-h-56 sm:max-h-40`}>
      <img className={`rounded-full justify-center items-center`} src={props.profile} />
      <div className={`mt-3 text-primary-2 flex flex-col justify-center items-start lg:items-center text-center ps-5 lg:ps-0`}>
        <p className={`text-xl lg:text-base`}>{props.fName}</p>
        <div className={`flex justify-center items-center gap-1`}>{campRender()}</div>
      </div>
    </div>
  );
}

export default UsersProfile;
