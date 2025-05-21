
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Available for Speaking Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Available for Speaking, Panels & Mentorship</h2>
              <Separator className="w-16 h-1 bg-deep-blue mb-8" />
            </div>
            
            <p className="text-lg">
              I love contributing to technical communities — especially around engineering leadership, backend architecture, and building inclusive dev cultures.
            </p>
            
            <p className="text-lg font-medium">I'm available for:</p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span>Podcasts, tech panels & conference talks</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span>Guest mentoring for women in backend roles</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span>Internal workshops & backend team upleveling</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                <span>Bootcamp curriculum input & guest speaking</span>
              </li>
            </ul>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-deep-blue hover:bg-deep-blue/90 text-white"
            >
              Reach out to book me
            </Button>
          </div>
          
          {/* Need a Trusted Technical Hand Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Need a Trusted Technical Hand?</h2>
              <Separator className="w-16 h-1 bg-deep-blue mb-8" />
            </div>
            
            <p className="text-lg">
              I don't just build systems — I build networks of people who can.
            </p>
            
            <p className="text-lg">
              If you're looking for a backend engineer, DevOps expert, cloud specialist, or data lead, I can point you toward vetted, experienced professionals I trust.
            </p>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-deep-blue hover:bg-deep-blue/90 text-white"
            >
              Reach out if you're hiring
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
