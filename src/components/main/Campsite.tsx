import CampCard from "./extra/CampCard";
import { flexItemsCol, flexItemsRow } from "src/shared/style";

function Campsite() {
  return (
    <section className={`bg-primary-4`}>
      <div className={`${flexItemsRow} justify-center p-16`}>
        <div className={`w-1200 ${flexItemsCol} items-center flex-col `}>
          <h3 className={`text-xl font-medium`}>Current Camp</h3>
          <p className={`font-medium`}>Episode 1 : Introduce Yourself</p>
          <div className={`${flexItemsCol} flex-col lg:${flexItemsRow} lg:flex-row gap-10`}>
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
