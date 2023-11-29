import Dashboard from "../dashboard/Dashboard";
import About from "./About";
import Campsite from "./Campsite";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Dashboard />
      <Campsite />
    </div>
  );
}

export default Home;
