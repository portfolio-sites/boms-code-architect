
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Trophy } from "lucide-react";

const Awards = () => {
  return (
    <section id="awards" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Fun Stuff & Community</h2>
          <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-6" />
          <p className="text-lg max-w-2xl mx-auto">
            Beyond code and systems, here are some things I enjoy and contribute to in my free time.
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
              
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e21d82f1-90b6-4538-9c79-89a4a6e10fdf.png" 
                  alt="First Place Halloween Karaoke 2023 Trophy" 
                  className="object-contain w-full h-full p-4"
                />
              </div>
              
              <p className="text-lg">
                Proud winner of the 2023 Halloween Karaoke Contest. My rendition of "Thriller" apparently brought down the house!
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-grotesk text-xl font-bold">Animal Shelter Volunteer</h3>
              </div>
              
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ccbe82b5-cf22-4aab-9ca1-2b75e556fb1e.png" 
                  alt="Animal Shelter Volunteering" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <p className="text-lg">
                I regularly volunteer at a local pet shelter in Malta, helping with animal care, website maintenance, and social media. It's a welcome break from the digital world!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Awards;
