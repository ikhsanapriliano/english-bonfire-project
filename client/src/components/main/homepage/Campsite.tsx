import CampCard from "../extra/CampCard";
import { flexItemsCol, flexItemsRow } from "src/shared/style";

function Campsite() {
  return (
    <section id={`camp`} className={`bg-primary-4`}>
      <div className={`${flexItemsRow} justify-center p-24`}>
        <div className={`w-1200 ${flexItemsCol} items-center flex-col `}>
          <h3 className={`text-xl font-medium`}>Current Camp</h3>
          <p className={`font-medium`}>Episode 1 : Introduce Yourself</p>
          <div className={`${flexItemsCol} flex-col lg:${flexItemsRow} lg:flex-row gap-10`}>
            <CampCard bivouac="Bivouac 1" day="Monday 8 PM" />
            <CampCard bivouac="Bivouac 2" day="Tuesday 8 PM" />
            <CampCard bivouac="Bivouac 3" day=" Wednesday 8 PM" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campsite;
