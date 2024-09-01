import Image from "next/image";
import HeroSection from "./components/homePage/HeroSection";
import AboutSection from "./components/homePage/AboutSection";
import Skills from "./components/homePage/Skills";
import Projects from "./components/homePage/Projects";
import ContactMe from "./components/homePage/ContactMe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}
