
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
    <section id="hero" className="bg-gradient-to-b from-dark-navy to-navy-blue min-h-screen flex items-center relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-center bg-cover bg-no-repeat opacity-10"></div>
      
      {/* Gold decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-gold via-royal-gold to-deep-gold"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-deep-gold via-royal-gold to-deep-gold"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-deep-gold/5 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-royal-gold/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-royal-gold/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[10%] w-20 h-20 rounded-full bg-deep-gold/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10 hidden sm:block">
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-r border-royal-gold/20 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 md:grid-rows-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-b border-royal-gold/20 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-10 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Tech stack badge */}
          <div className="mb-8 flex justify-center">
            <div className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm flex items-center gap-2 border border-royal-gold/30 shadow-lg animate-fade-in">
              <Code size={16} className="text-royal-gold" />
              <span className="text-white/90 text-sm font-medium">
                <span className="hidden sm:inline">Expertise in </span>
                <span className="font-mono text-royal-gold animate-pulse inline-block">{techStack[currentTechIndex]}</span>
              </span>
            </div>
          </div>
          
          {/* Main heading with animated gradient */}
          <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in font-serif">
            <span className="bg-gradient-to-r from-royal-gold via-white to-deep-gold bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">
              Stephanie Boms
            </span>
          </h1>
          
          <span className="block text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-royal-gold mb-8 animate-fade-in font-serif" style={{animationDelay: "0.1s"}}>
            Software Developer & Team Lead
          </span>
          
          {/* Feature callouts */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-2.5 border border-royal-gold/30">
              <Zap size={16} className="text-royal-gold mr-3" />
              <span className="text-white/90 text-base">10+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-2.5 border border-royal-gold/30">
              <BarChart size={16} className="text-royal-gold mr-3" />
              <span className="text-white/90 text-base">Enterprise Solutions</span>
            </div>
          </div>
          
          {/* Description with enhanced typography */}
          <p className="text-white/85 text-center text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed font-sans" style={{animationDelay: "0.3s"}}>
            Based in Swieqi, Malta, Stephanie brings over 10 years of experience developing secure, scalable software solutions across healthcare, fintech, gaming, and government sectors.
          </p>
          
          {/* CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-deep-gold to-royal-gold hover:from-royal-gold hover:to-deep-gold text-dark-navy text-base md:text-lg font-medium transition-all duration-300 px-8 py-7 rounded-full shadow-[0_10px_25px_-10px_rgba(212,175,55,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.6)]"
            >
              Explore My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-royal-gold text-royal-gold hover:bg-white/10 text-base md:text-lg font-medium transition-all duration-300 px-8 py-7 rounded-full shadow-lg hover:shadow-xl"
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
          className="text-white rounded-full border border-royal-gold/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 animate-pulse-soft"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={20} className="text-royal-gold" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
