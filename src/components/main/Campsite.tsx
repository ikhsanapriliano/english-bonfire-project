import CampCard from "./extra/CampCard";
import { flexItemsCol, flexItemsRow } from "src/shared/style";

function Campsite() {
  return (
    <section className={`bg-primary-4`}>
      <div className={`${flexItemsRow} justify-center p-16`}>
        <div className={`w-1200 ${flexItemsCol} items-center flex-col `}>
          <h3 className={`text-xl font-medium`}>Current Camps</h3>
          <div className={`${flexItemsCol} gap-10`}>
            <CampCard />
            <CampCard />
            <CampCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campsite;
