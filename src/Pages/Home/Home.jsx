import Hero from "../../Components/Home/Hero.jsx"
import HomeDept from "../../Components/Home/HomeDept/HomeDept.jsx";
import { Bento, Box } from '@primer/react-brand'

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <HomeDept />
        
      </div>
    </div>
  )
}

export default Home