
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-charcoal">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#E06C00_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-10 md:py-20">
        <div className="max-w-3xl">
          {/* Main heading with precise styling */}
          <h1 className="text-left text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-beige modern-heading">
            Stephanie Boms
            <span className="block text-orange mt-2">
              builds the systems the world runs on.
            </span>
          </h1>
          
          <div className="h-1 w-24 bg-orange mb-8"></div>
          
          <h2 className="block text-left text-xl md:text-2xl font-light mb-8 text-beige/80 modern-heading">
            Backend engineering leadership across fintech, gaming, healthcare, and public infrastructure.
          </h2>
          
          {/* Description */}
          <p className="text-left text-base md:text-lg mb-12 max-w-2xl leading-relaxed text-beige/70">
            Based in Swieqi, Malta, bringing over 10 years of experience developing secure, scalable software solutions across healthcare, fintech, gaming, and government sectors.
          </p>
          
          {/* CTA buttons with intentional styling */}
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <Button 
              size="default" 
              onClick={() => scrollToSection('projects')}
              className="bg-orange hover:bg-orange-dark text-beige font-normal"
            >
              View My Work
            </Button>
            <Button 
              size="default" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-orange/20 text-orange hover:bg-orange/10 font-normal"
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
          className="rounded-full border border-orange/20 bg-charcoal/50 hover:bg-charcoal text-beige animate-subtle-float"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
        >
          <ChevronDown size={18} className="text-orange" />
        </Button>
      </div>

      {/* Abstract graphical element */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 hidden md:block">
        <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-tl from-orange/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
