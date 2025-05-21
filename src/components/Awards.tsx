
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Heart } from "lucide-react";

const Awards = () => {
  return (
    <section id="awards" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Awards & Fun Facts</h2>
          <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-8" />
          <p className="text-lg max-w-2xl mx-auto">
            Behind every serious engineer is a fun-loving human. Here's a glimpse into my life outside of code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-grotesk text-xl font-bold">Karaoke Champion</h3>
              </div>
              
              <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e21d82f1-90b6-4538-9c79-89a4a6e10fdf.png" 
                  alt="First Place Halloween Karaoke 2023 Trophy" 
                  className="object-contain w-full h-full p-4"
                />
              </div>
              
              <p className="text-lg">
                When I'm not engineering robust systems, I'm winning karaoke competitions! 1st Place at the Halloween Karaoke 2023.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-grotesk text-xl font-bold">Volunteer Work</h3>
              </div>
              
              <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ccbe82b5-cf22-4aab-9ca1-2b75e556fb1e.png" 
                  alt="Speaking at Girls in ICT 2016" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <p className="text-lg mb-4">
                I regularly volunteer at a pet shelter in Malta and give back to the tech community by mentoring women in technology.
              </p>
              
              <p className="text-lg">
                I was a speaker at the Girls in ICT events in 2015 and 2016, inspiring the next generation of women in STEM fields.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img 
                src="/lovable-uploads/e9ba93a9-bc30-4911-9119-7e316fb0ef99.png" 
                alt="MTC Media logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img 
                src="/lovable-uploads/4406eb65-8acc-411b-97f3-bb0179745128.png" 
                alt="MTech Communications logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
