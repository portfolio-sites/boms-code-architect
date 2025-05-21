
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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-center bg-cover bg-no-repeat opacity-[0.03]"></div>
      
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-accent-gold to-indigo-400"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-indigo-100/30 animate-subtle-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-accent-gold-light/30 animate-subtle-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-indigo-100/30 animate-subtle-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[10%] w-20 h-20 rounded-full bg-accent-gold-light/30 animate-subtle-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] hidden sm:block">
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-r border-indigo-500 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 md:grid-rows-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-b border-indigo-500 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-10 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Tech stack badge */}
          <div className="mb-8 flex justify-center">
            <div className="px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm flex items-center gap-2 border border-slate-200 shadow-sm animate-fade-in">
              <Code size={16} className="text-indigo-500" />
              <span className="text-slate-700 text-sm font-medium">
                <span className="hidden sm:inline">Expertise in </span>
                <span className="font-mono text-indigo-600 animate-subtle-pulse inline-block">{techStack[currentTechIndex]}</span>
              </span>
            </div>
          </div>
          
          {/* Main heading with modern styling */}
          <h1 className="text-slate-800 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 animate-fade-in">
            <span className="text-indigo-600">
              Stephanie Boms
            </span>
          </h1>
          
          <span className="block text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent-gold-dark mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Software Developer & Team Lead
          </span>
          
          {/* Feature callouts */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2.5 border border-slate-200">
              <Zap size={16} className="text-indigo-500 mr-3" />
              <span className="text-slate-700 text-base">10+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2.5 border border-slate-200">
              <BarChart size={16} className="text-indigo-500 mr-3" />
              <span className="text-slate-700 text-base">Enterprise Solutions</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-slate-600 text-center text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: "0.3s"}}>
            Based in Swieqi, Malta, Stephanie brings over 10 years of experience developing secure, scalable software solutions across healthcare, fintech, gaming, and government sectors.
          </p>
          
          {/* CTA buttons with modern styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg font-medium transition-all duration-300 px-8 py-6 rounded-md shadow-md hover:shadow-lg"
            >
              Explore My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 text-base md:text-lg font-medium transition-all duration-300 px-8 py-6 rounded-md shadow-sm hover:shadow-md"
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
          className="text-slate-700 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-white animate-pulse-soft"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={20} className="text-indigo-500" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
