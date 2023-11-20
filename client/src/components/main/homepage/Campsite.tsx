import CampCard from "../extra/CampCard";
import episode from "src/shared/episode";

function Campsite() {
  return (
    <section id={`camp`} className={`bg-primary-4`}>
      <div className={`flex items-center justify-center p-24`}>
        <div className={`w-1200 flex justify-center items-center flex-col `}>
          <h3 className={`text-xl font-medium`}>Current Camp</h3>
          <p className={`font-medium`}>{`Episode ${episode.number} : ${episode.title}`}</p>
          <div className={`flex justify-center flex-col lg:items-center lg:flex-row gap-10`}>
            <CampCard id={`${episode.identity}B1`} bivouac="Bivouac 1" day="Monday 8 PM" />
            <CampCard id={`${episode.identity}B2`} bivouac="Bivouac 2" day="Wednesday 8 PM" />
            <CampCard id={`${episode.identity}B3`} bivouac="Bivouac 3" day="Friday 8 PM" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campsite;
