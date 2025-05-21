
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1D4ED8] to-[#0A1F44] text-white py-12 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 - Logo and social links */}
          <div>
            <h3 className="text-xl font-grotesk font-bold mb-4">Stephanie Boms</h3>
            <p className="text-white/80 mb-4 font-normal">Backend systems engineer & technical advisor</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/stephanie-boms-07" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span className="sr-only">Connect</span>
              </a>
              <a 
                href="https://github.com/steffanie07" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://charisintelligence.com.ng/team-members/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Board Member"
              >
                <ExternalLink size={18} />
                <span className="sr-only">Board Member</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Contact */}
          <div className="md:flex md:justify-end">
            <div>
              <h3 className="text-lg font-grotesk font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/80 font-normal">Swieqi, Malta</li>
                <li className="text-white/80 font-normal flex items-center">
                  <Mail size={16} className="mr-2" /> 
                  <a href="mailto:Steffanie07@gmail.com" className="hover:text-white transition-colors">
                    Steffanie07@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="text-center text-white/80 text-sm">
          <p className="mb-2 font-normal">© Copyright Creit Technologies Limited. All Rights Reserved.</p>
          <p className="font-normal">
            Designed by{" "}
            <a 
              href="https://www.instagram.com/missjones_tech?igsh=aHYzcHRzb2w5Ymdr&utm_source=qr" 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:underline"
            >
              MissJonesTech
            </a>
            . Distributed by{" "}
            <a 
              href="https://www.instagram.com/creittechnologies?igsh=MXYwd3c1c3RkbmdxOQ==" 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:underline"
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
