import gsap from "gsap"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import { ScrollTrigger } from "gsap/all";
import About from "./components/About";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import CertificateSection from "./components/CertificateSection";
import Extras from "./components/Extras";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {

  gsap.registerPlugin(ScrollTrigger);

  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
      <SkillSection />
      <ProjectSection />
      <CertificateSection />
      <Extras />
      <Contact />
      <Footer />
    </main>
  )
}

export default App