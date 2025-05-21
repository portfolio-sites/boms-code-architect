
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, ExternalLink, Mail, ChevronRight, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-royal-blue to-midnight text-white py-16 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-wave-pattern bg-cover opacity-5"></div>
      
      {/* Animated dots */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue via-royal-blue to-soft-blue animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 - Logo and social links */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-grotesk font-bold mb-2">Stephanie Boms</h3>
            <p className="text-white/90 mb-6 font-normal max-w-md">
              Backend systems engineer & technical advisor crafting elegant solutions for complex challenges.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/stephanie-boms-07" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
                <span className="sr-only">Connect</span>
              </a>
              <a 
                href="https://github.com/steffanie07" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={16} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://charisintelligence.com.ng/team-members/" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Board Member"
              >
                <ExternalLink size={16} />
                <span className="sr-only">Board Member</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Contact */}
          <div className="md:flex md:justify-start animate-fade-in" style={{animationDelay: "0.1s"}}>
            <div>
              <h3 className="text-lg font-grotesk font-bold mb-4 flex items-center">
                <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center mr-2">
                  <ChevronRight size={12} />
                </span>
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="text-white/90 font-normal flex items-center">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <Mail size={14} className="text-soft-blue" />
                  </div>
                  <a href="mailto:Steffanie07@gmail.com" className="hover:text-soft-blue transition-colors">
                    Steffanie07@gmail.com
                  </a>
                </li>
                <li className="text-white/90 font-normal flex items-center">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-soft-blue">
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.5 10C19.5 15.5 12 21 12 21C12 21 4.5 15.5 4.5 10C4.5 6.13401 7.86401 3 12 3C16.136 3 19.5 6.13401 19.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Swieqi, Malta
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-10 bg-white/20" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white/80 text-sm gap-4">
          <p className="font-normal flex items-center">
            <Heart size={14} className="text-soft-blue mr-1" /> 
            © Copyright Creit Technologies Limited. All Rights Reserved.
          </p>
          <p className="font-normal">
            Designed by{" "}
            <a 
              href="https://www.instagram.com/missjones_tech?igsh=aHYzcHRzb2w5Ymdr&utm_source=qr" 
              target="_blank" 
              rel="noreferrer"
              className="text-soft-blue hover:underline"
            >
              MissJonesTech
            </a>
            . Distributed by{" "}
            <a 
              href="https://www.instagram.com/creittechnologies?igsh=MXYwd3c1c3RkbmdxOQ==" 
              target="_blank" 
              rel="noreferrer"
              className="text-soft-blue hover:underline"
            >
              Creit Digitals
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
