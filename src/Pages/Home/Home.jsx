import Countdown from "../../Components/Countdown/Countdown.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import About from "../../Components/Home/About.jsx";
import Hero from "../../Components/Home/Hero.jsx"
import HomeDept from "../../Components/Home/HomeDept/HomeDept.jsx";


const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <About/>
        <HomeDept />
        <Countdown/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home