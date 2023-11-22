import { Link } from "react-router-dom";

function Step5() {
  return (
    <div className={`flex flex-col items-center min-h-screen py-24`}>
      <h2 className={`text-5xl mb-5 text-center`}>You Are Registered</h2>
      <Link to={`https://www.instagram.com/englishbonfire.id/`} className={`bg-primary-2 py-2 px-5 rounded-sm text-white mb-2 hover:bg-primary-1`}>
        Follow Instagram
      </Link>
      <Link to={`https://discord.gg/M4jZ8nyF`} className={`bg-primary-2 py-2 px-5 rounded-sm text-white hover:bg-primary-1`}>
        Join Discord
      </Link>
    </div>
  );
}

export default Step5;
