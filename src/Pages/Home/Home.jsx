import Countdown from "../../Components/Countdown/Countdown.jsx";
import About from "../../Components/Home/About.jsx";
import Hero from "../../Components/Home/Hero.jsx"
import HomeDept from "../../Components/Home/HomeDept/HomeDept.jsx";


const Home = () => {
<<<<<<< HEAD
  document.documentElement.scrollTop=0;
=======

  const handleScrollToContact = () => {
    const footerElement = document.getElementById('contact');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
>>>>>>> 241f9d1b79085d22c1d754fe5c9cc7d21db2ffd2
  return (
    <div>
      <div>
        <Hero  scrollToContact={handleScrollToContact} />
        <About/>
        <HomeDept />
        <Countdown/>
      </div>
    </div>
  )
}

export default Home