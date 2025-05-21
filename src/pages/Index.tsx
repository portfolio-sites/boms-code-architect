
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
  const [activeSection, setActiveSection] = useState<string>("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      
      // Determine active section for navbar highlighting
      const sections = [
        "hero", 
        "about", 
        "expertise", 
        "experience", 
        "projects", 
        "awards", 
        "testimonials", 
        "speaking", 
        "contact"
      ];
      
      const scrollPosition = window.scrollY + 200; // 200px offset for better UX
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
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
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#F9FAFB]">
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
          className="fixed bottom-6 right-6 bg-[#2563EB] text-white p-3 rounded-full shadow-xl hover:bg-[#1D4ED8] transition-all z-50 hover:scale-110"
          variant="default"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </Button>
      )}
      
      {/* Add some custom styles for transitions */}
      <style global>
        {`
        @keyframes growWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        
        section {
          scroll-margin-top: 80px;
        }
        
        .animate-fade-in {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
