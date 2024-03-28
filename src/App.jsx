import Dept from "./Components/Dept/Dept";
import Event from "./Components/Events/Event";
import TechCard from "./Components/Events/TECH/TechCard";
import Hero from "./Components/Home/Hero";
import NavBar from "./Components/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Dept/>
      <Event/>
      <TechCard/>
    </div>
  )
}

export default App;