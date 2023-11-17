import Dashboard from "../dashboard/Dashboard";
import Campsite from "./Campsite";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Dashboard />
      <Campsite />
    </div>
  );
}

export default Home;
