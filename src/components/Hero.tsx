
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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-center bg-cover bg-no-repeat opacity-[0.02]"></div>
      
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full bg-blue-100/30 animate-subtle-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[60%] left-[20%] w-12 h-12 rounded-full bg-teal-100/30 animate-subtle-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-full bg-blue-100/30 animate-subtle-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[10%] w-14 h-14 rounded-full bg-teal-100/30 animate-subtle-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-10 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Tech stack badge */}
          <div className="mb-8 flex justify-center">
            <div className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm flex items-center gap-2 border border-gray-100 shadow-sm animate-fade-in">
              <Code size={16} className="text-blue-500" />
              <span className="text-gray-700 text-sm font-medium">
                <span className="hidden sm:inline">Expertise in </span>
                <span className="font-mono text-blue-600 animate-subtle-pulse inline-block min-w-[80px] text-center">{techStack[currentTechIndex]}</span>
              </span>
            </div>
          </div>
          
          {/* Main heading with modern styling */}
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 animate-fade-in text-gray-800">
            <span className="text-blue-600">
              Stephanie Boms
            </span>
          </h1>
          
          <span className="block text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-600 mb-8 animate-fade-in font-light" style={{animationDelay: "0.1s"}}>
            Software Developer & Team Lead
          </span>
          
          {/* Feature callouts */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="flex items-center bg-white rounded-full px-5 py-2 border border-gray-100 shadow-sm">
              <Zap size={16} className="text-blue-500 mr-2" />
              <span className="text-gray-700 text-sm md:text-base">10+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-5 py-2 border border-gray-100 shadow-sm">
              <BarChart size={16} className="text-blue-500 mr-2" />
              <span className="text-gray-700 text-sm md:text-base">Enterprise Solutions</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-center text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed text-gray-600" style={{animationDelay: "0.3s"}}>
            Based in Swieqi, Malta, Stephanie brings over 10 years of experience developing secure, scalable software solutions across healthcare, fintech, gaming, and government sectors.
          </p>
          
          {/* CTA buttons with modern styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 px-6 py-5 rounded-md shadow-sm hover:shadow"
            >
              Explore My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-blue-200 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 px-6 py-5 rounded-md"
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
          className="text-gray-700 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white animate-pulse-soft"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={20} className="text-blue-500" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
