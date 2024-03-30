import Countdown from "../../Components/Countdown/Countdown.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import About from "../../Components/Home/About.jsx";
import Hero from "../../Components/Home/Hero.jsx"
import HomeDept from "../../Components/Home/HomeDept/HomeDept.jsx";


const Home = () => {

  const handleScrollToContact = () => {
    const footerElement = document.getElementById('contact');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      <div>
        <Hero  scrollToContact={handleScrollToContact} />
        <About/>
        <HomeDept />
        <Countdown/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home