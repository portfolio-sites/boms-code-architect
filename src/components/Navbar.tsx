
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-blue/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="text-white font-grotesk text-xl md:text-2xl font-bold">
            Stephanie Boms
          </a>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('about')} className="text-white nav-item cursor-pointer">About</a>
            <a onClick={() => scrollToSection('expertise')} className="text-white nav-item cursor-pointer">What I Do</a>
            <a onClick={() => scrollToSection('projects')} className="text-white nav-item cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('speaking')} className="text-white nav-item cursor-pointer">Speaking</a>
            <a onClick={() => scrollToSection('awards')} className="text-white nav-item cursor-pointer">Awards</a>
            <a onClick={() => scrollToSection('contact')} className="text-white nav-item cursor-pointer">Contact</a>
            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/stephanie-boms-07', '_blank')}
              className="bg-white text-deep-blue hover:bg-white/90"
            >
              Hire or Refer
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-deep-blue">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection('about')} className="text-white py-2 px-4 cursor-pointer">About</a>
            <a onClick={() => scrollToSection('expertise')} className="text-white py-2 px-4 cursor-pointer">What I Do</a>
            <a onClick={() => scrollToSection('projects')} className="text-white py-2 px-4 cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('speaking')} className="text-white py-2 px-4 cursor-pointer">Speaking</a>
            <a onClick={() => scrollToSection('awards')} className="text-white py-2 px-4 cursor-pointer">Awards</a>
            <a onClick={() => scrollToSection('contact')} className="text-white py-2 px-4 cursor-pointer">Contact</a>
            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/stephanie-boms-07', '_blank')}
              className="bg-white text-deep-blue hover:bg-white/90 w-full"
            >
              Hire or Refer
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
