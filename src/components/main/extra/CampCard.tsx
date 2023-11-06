import { flexItemsCol, flexItemsRow } from "src/shared/style";
import CardProfile from "./CardProfile";

function CampCard() {
  return (
    <div className={`${flexItemsCol} items-center flex-col bg-white p-7 rounded-2xl mt-7 w-72 border border-black`}>
      <h4 className={`text-center`}>Bevouac 1</h4>
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
      <p>{`Episode 1 : Introduce Your Self`}</p>
      <p>Monday 8 PM</p>
      <button className={`py-1 px-5 rounded-sm mt-2 bg-primary-2 text-white`}>Join</button>
    </div>
  );
}

export default CampCard;
