import Countdown from "../../Components/Countdown/Countdown.jsx";
import About from "../../Components/Home/About.jsx";
import Hero from "../../Components/Home/Hero.jsx"
import HomeDept from "../../Components/Home/HomeDept/HomeDept.jsx";


const Home = () => {
  document.documentElement.scrollTop=0;
  return (
    <div>
      <div>
        <Hero />
        <About/>
        <HomeDept />
        <Countdown/>
      </div>
    </div>
  )
}

export default Home