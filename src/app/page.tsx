
import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="m-0 p-0">
    <HeroSection/>
    <br /> <br /> <br />
    <About/>
    <br /> <br /> <br />
    <Projects />
    <br /> <br /> <br />
    <Contact/>
    <br /> <br /> <br />
 </div>
  );
}
