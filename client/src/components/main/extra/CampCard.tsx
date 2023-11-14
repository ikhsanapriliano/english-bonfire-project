import { flexItemsCol, flexItemsRow } from "src/shared/style";
import CardProfile from "./CardProfile";
import { HashLink } from "react-router-hash-link";

interface camp {
  bivouac: string;
  day: string;
}

function CampCard(props: camp) {
  return (
    <div className={`${flexItemsCol} items-center flex-col bg-white p-7 rounded-2xl mt-7 w-72 border border-black`}>
      <h4 className={`text-center`}>{props.bivouac}</h4>
      <div className={`${flexItemsCol} items-center flex-col gap-1 p-10 border border-primary-2 my-2`}>
        <CardProfile />
        <div className={`${flexItemsRow} gap-1`}>
          <CardProfile />
          <CardProfile />
        </div>
        <div className={`${flexItemsRow} gap-1`}>
          <CardProfile />
          <CardProfile />
        </div>
      </div>
      <p>{props.day}</p>
      <HashLink smooth to={`/bevouac/#step`} className={`py-1 px-5 rounded-sm mt-2 bg-primary-2 hover:bg-primary-1 text-white`}>
        Join
      </HashLink>
    </div>
  );
}

export default CampCard;