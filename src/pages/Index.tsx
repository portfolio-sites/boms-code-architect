
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Speaking from "@/components/Speaking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Awards />
      <Testimonials />
      <Speaking />
      <Contact />
      <Footer />
      
      {showScrollButton && (
        <Button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-deep-blue text-white p-3 rounded-full shadow-xl hover:bg-deep-blue/90 transition-all z-50 hover:scale-110"
          variant="default"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </div>
  );
};

export default Index;
