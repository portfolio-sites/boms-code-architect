
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
  const techStack = ["Laravel", "PHP", "Java", "React", "MongoDB", "Docker", "Symfony", "Next.js"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="bg-deep-blue min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover bg-no-repeat opacity-10"></div>
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="mb-3 text-white/70 text-xl animate-pulse">
            {techStack[currentTechIndex]}
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Building Scalable<br /> Enterprise Systems
          </h1>
          <p className="text-white/80 text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            Senior backend engineer with 10+ years of experience architecting robust solutions for government, fintech & gaming sectors across 8+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-deep-blue hover:bg-white/90 text-lg"
            >
              Let's Talk
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="border-white text-black hover:bg-white/10 hover:text-white text-lg"
            >
              View My Work
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
