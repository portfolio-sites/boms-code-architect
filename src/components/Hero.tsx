
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Dynamic tech stack animation
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const techStack = ["Laravel", "PHP", "Java", "React", ".NET", "Vue.js", "Symfony", "Next.js"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="bg-[#0A1F44] min-h-screen flex items-center relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover bg-no-repeat opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44] to-[#0A1F44]/90"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 md:grid-rows-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-b border-white/10 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-10 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-3 text-[#A3B1C6] text-lg md:text-xl">
            <span className="font-mono animate-pulse inline-block">&lt;</span>
            <span className="font-mono animate-pulse inline-block">{techStack[currentTechIndex]}</span>
            <span className="font-mono animate-pulse inline-block">/&gt;</span>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 animate-fade-in">
            Stephanie Boms
          </h1>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 mb-4">Software Developer & Team Lead</span>
          <h2 className="text-[#A3B1C6] text-lg md:text-xl lg:text-2xl font-semibold mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Leading backend teams to build the reliable systems real-world operations depend on.
          </h2>
          <p className="text-[#D6DDEA] text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Based in Swieqi, Malta, Stephanie brings over 10 years of experience crafting secure, scalable software solutions across healthcare, fintech, gaming, and government sectors. She specializes in driving agile teams to deliver impactful technology that powers everyday services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] text-base md:text-lg font-medium hover:scale-105 transition-transform px-6 md:px-9 py-5 md:py-7"
            >
              Explore My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white text-black hover:bg-white/10 hover:text-white text-base md:text-lg font-medium"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost"
          size="icon"
          className="text-white rounded-full"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
