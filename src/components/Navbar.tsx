
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

  // Determine background color based on scroll position
  const navbarBg = isScrolled 
    ? 'bg-charcoal/95 backdrop-blur-sm' 
    : 'bg-transparent';

  const textColor = 'text-beige';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className={`${textColor} font-sans text-xl md:text-2xl font-medium`}>
            Stephanie Boms
          </a>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className={textColor}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('about')} className={`${textColor} nav-item cursor-pointer text-sm font-normal`}>About</a>
            <a onClick={() => scrollToSection('expertise')} className={`${textColor} nav-item cursor-pointer text-sm font-normal`}>What I Do</a>
            <a onClick={() => scrollToSection('projects')} className={`${textColor} nav-item cursor-pointer text-sm font-normal`}>Projects</a>
            <a onClick={() => scrollToSection('speaking')} className={`${textColor} nav-item cursor-pointer text-sm font-normal`}>Speaking</a>
            <a onClick={() => scrollToSection('awards')} className={`${textColor} nav-item cursor-pointer text-sm font-normal`}>Awards</a>
            <a onClick={() => scrollToSection('contact')} className={`${textColor} nav-item cursor-pointer text-sm font-normal`}>Contact</a>
            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/stephanie-boms-07', '_blank')}
              className="bg-orange hover:bg-orange-dark text-white text-sm font-normal"
              variant="default"
              size="sm"
            >
              Hire or Refer
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection('about')} className={`${textColor} py-2 px-4 cursor-pointer text-sm`}>About</a>
            <a onClick={() => scrollToSection('expertise')} className={`${textColor} py-2 px-4 cursor-pointer text-sm`}>What I Do</a>
            <a onClick={() => scrollToSection('projects')} className={`${textColor} py-2 px-4 cursor-pointer text-sm`}>Projects</a>
            <a onClick={() => scrollToSection('speaking')} className={`${textColor} py-2 px-4 cursor-pointer text-sm`}>Speaking</a>
            <a onClick={() => scrollToSection('awards')} className={`${textColor} py-2 px-4 cursor-pointer text-sm`}>Awards</a>
            <a onClick={() => scrollToSection('contact')} className={`${textColor} py-2 px-4 cursor-pointer text-sm`}>Contact</a>
            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/stephanie-boms-07', '_blank')}
              className="bg-orange hover:bg-orange-dark text-white w-full text-sm font-normal"
              variant="default"
              size="sm"
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
