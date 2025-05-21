
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Zap, BarChart } from "lucide-react";
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
    <section id="hero" className="bg-gradient-to-b from-royal-blue to-midnight min-h-screen flex items-center relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-center bg-cover bg-no-repeat opacity-10"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-soft-blue/20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-soft-blue/15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-soft-blue/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[10%] w-20 h-20 rounded-full bg-soft-blue/15 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20 hidden sm:block">
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
        <div className="max-w-3xl mx-auto">
          {/* Tech stack badge */}
          <div className="mb-6 flex justify-center">
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm flex items-center gap-2 border border-white/20 shadow-lg animate-fade-in">
              <Code size={14} className="text-soft-blue" />
              <span className="text-white/90 text-sm font-medium">
                <span className="hidden sm:inline">Expertise in </span>
                <span className="font-mono text-soft-blue animate-pulse inline-block">{techStack[currentTechIndex]}</span>
              </span>
            </div>
          </div>
          
          {/* Main heading with animated gradient */}
          <h1 className="text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in background-animate">
            <span className="bg-gradient-to-r from-white via-soft-blue to-white bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">
              Stephanie Boms
            </span>
          </h1>
          
          <span className="block text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Software Developer & Team Lead
          </span>
          
          {/* Feature callouts */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
              <Zap size={14} className="text-soft-blue mr-2" />
              <span className="text-white/90 text-sm">10+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
              <BarChart size={14} className="text-soft-blue mr-2" />
              <span className="text-white/90 text-sm">Enterprise Solutions</span>
            </div>
          </div>
          
          {/* Description with enhanced typography */}
          <p className="text-white/90 text-center text-sm md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: "0.3s"}}>
            Based in Swieqi, Malta, Stephanie brings over 10 years of experience developing secure, scalable software solutions across healthcare, fintech, gaming, and government sectors.
          </p>
          
          {/* CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-midnight hover:bg-soft-blue hover:text-midnight text-base md:text-lg font-medium transition-all duration-300 px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
            >
              Explore My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white text-white hover:bg-white/20 text-base md:text-lg font-medium transition-all duration-300 px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <Button 
          variant="ghost"
          size="icon"
          className="text-white rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 animate-pulse-soft"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
