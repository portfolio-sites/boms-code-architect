
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Speaking = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="speaking" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Available for Speaking Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Available for Speaking, Panels & Mentorship</h2>
              <Separator className="w-16 h-1 bg-deep-blue mb-6" />
            </div>
            
            <p className="text-lg text-gray-700">
              I love contributing to technical communities — especially around engineering leadership, backend architecture, and building inclusive dev cultures.
            </p>
            
            <p className="text-lg font-medium text-gray-800">I'm available for:</p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span className="text-gray-700">Podcasts, tech panels & conference talks</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span className="text-gray-700">Guest mentoring for women in backend roles</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span className="text-gray-700">Internal workshops & backend team upleveling</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span className="text-gray-700">Bootcamp curriculum input & guest speaking</span>
              </li>
            </ul>
            
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-800">
                Past Speaking Engagements:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-700">Girls in ICT Events (2015-2016) - Speaker for senior secondary girls interested in STEM</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-700">Charis Intelligence Webinar (2023) - Technical Leadership Talk</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-700">Resplash Academy - Mentor for Women in Tech (2019-Present)</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-deep-blue hover:bg-deep-blue/90 text-white"
              >
                Reach out to book me
              </Button>
              
              <Button 
                variant="outline"
                className="border-deep-blue text-deep-blue hover:bg-deep-blue/10"
                onClick={() => window.open('https://charisintelligence.com.ng/team-members/', '_blank')}
              >
                View Board Position <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Need a Trusted Technical Hand Section */}
          <div className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Need a Trusted Technical Hand?</h2>
              <Separator className="w-16 h-1 bg-deep-blue mb-6" />
            </div>
            
            <p className="text-lg text-gray-700">
              I don't just build systems — I build networks of people who can.
            </p>
            
            <p className="text-lg text-gray-700">
              If you're looking for a backend engineer, DevOps expert, cloud specialist, or data lead, I can point you toward vetted, experienced professionals I trust.
            </p>
            
            <div className="pt-6">
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/stephanie-boms-07', '_blank')}
                className="bg-deep-blue hover:bg-deep-blue/90 text-white hover:scale-105 transition-transform"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
