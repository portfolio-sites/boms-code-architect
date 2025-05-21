
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Logo and social links */}
          <div>
            <h3 className="text-xl font-grotesk font-bold mb-4">Stephanie Boms</h3>
            <p className="text-gray-600 mb-4 font-normal">Backend systems engineer & technical advisor</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/stephanie-boms-07" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center text-white hover:bg-deep-blue/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/steffanie07" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center text-white hover:bg-deep-blue/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://charisintelligence.com.ng/team-members/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center text-white hover:bg-deep-blue/80 transition-colors"
                aria-label="Board Member"
              >
                <ExternalLink size={18} />
                <span className="sr-only">Board Member</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick links */}
          <div>
            <h3 className="text-lg font-grotesk font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-deep-blue transition-colors font-normal">About</a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-600 hover:text-deep-blue transition-colors font-normal">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-deep-blue transition-colors font-normal">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-deep-blue transition-colors font-normal">Contact</a>
              </li>
              <li>
                <a href="#awards" className="text-gray-600 hover:text-deep-blue transition-colors font-normal">Recognition</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-grotesk font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 font-normal">Swieqi, Malta</li>
              <li className="text-gray-600 font-normal">(+356) 999-75-222</li>
              <li className="text-gray-600 font-normal">Steffanie07@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2 font-normal">© Copyright Creit Technologies Limited. All Rights Reserved.</p>
          <p className="font-normal">
            Designed by{" "}
            <a 
              href="https://www.instagram.com/missjones_tech?igsh=aHYzcHRzb2w5Ymdr&utm_source=qr" 
              target="_blank" 
              rel="noreferrer"
              className="text-deep-blue hover:underline"
            >
              MissJonesTech
            </a>
            . Distributed by{" "}
            <a 
              href="https://www.instagram.com/creittechnologies?igsh=MXYwd3c1c3RkbmdxOQ==" 
              target="_blank" 
              rel="noreferrer"
              className="text-deep-blue hover:underline"
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
