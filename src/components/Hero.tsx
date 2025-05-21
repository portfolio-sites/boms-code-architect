
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./theme-provider";

const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Simple background */}
      <div className="absolute inset-0 opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-10 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Main heading with minimal styling */}
          <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
            <span className="text-emerald-500">
              Stephanie Boms
            </span>
          </h1>
          
          <h2 className={`block text-center text-xl md:text-2xl font-light mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Software Developer & Team Lead
          </h2>
          
          {/* Description */}
          <p className={`text-center text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Based in Swieqi, Malta, bringing over 10 years of experience developing secure, scalable software solutions across healthcare, fintech, gaming, and government sectors.
          </p>
          
          {/* CTA buttons with minimal styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="default" 
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-normal"
            >
              View My Work
            </Button>
            <Button 
              size="default" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className={`border-emerald-200 text-emerald-600 hover:bg-emerald-50 font-normal ${
                theme === 'dark' ? 'border-emerald-800 text-emerald-400 hover:bg-emerald-900/30' : ''
              }`}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <Button 
          variant="ghost"
          size="icon"
          className={`rounded-full border ${
            theme === 'dark' 
              ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800' 
              : 'border-gray-200 bg-white/80 hover:bg-white text-gray-600'
          }`}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={18} className="text-emerald-500" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
