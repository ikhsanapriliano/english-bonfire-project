import Hero from "./Hero";
import Guidance from "./Guidance";
import { flexItemsCol, flexItemsRow } from "src/shared/style";

function Main() {
  return (
    <main>
      <Hero />
      <div className={`${flexItemsRow} justify-center p-16`}>
        <div className={`w-1200 ${flexItemsCol} items-center flex-col `}>
          <Guidance />
        </div>
      </div>
    </main>
  );
}

export default Main;
