
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Speaking from "@/components/Speaking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Testimonials />
      <Speaking />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
